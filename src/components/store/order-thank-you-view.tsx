"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Copy,
  Check,
  PhoneCall,
  Truck,
  PackageCheck,
  ShieldCheck,
  Edit3,
  MessageCircle,
  Sparkles,
  Loader2,
  Eye,
  Lock,
  ArrowRight,
  ShoppingBag
} from "lucide-react";
import { usePreferences } from "@/components/store/preferences-provider";
import { Money } from "@/components/store/money";

export type ThankYouOrderItem = {
  id: string;
  productId: string;
  productName: string;
  productSlug: string;
  imageSrc: string;
  quantity: number;
  unitPrice: number;
  total: number;
  isUpsell: boolean;
};

export type ThankYouUpsellOffer = {
  productId: string;
  name: string;
  slug: string;
  imageSrc: string;
  regularPrice: number;
  upsellPrice: number;
  headlineAr: string;
  headlineFr: string;
  descAr: string;
  descFr: string;
};

type OrderThankYouViewProps = {
  order: {
    id: string;
    reference: string;
    subtotal: number;
    discountTotal: number;
    total: number;
    notes: string | null;
    customer: {
      fullName: string;
      phone: string;
      address: string;
    };
    items: ThankYouOrderItem[];
  };
  whatsappNumber: string;
  availableUpsell?: ThankYouUpsellOffer | null;
};

export function OrderThankYouView({
  order,
  whatsappNumber,
  availableUpsell
}: OrderThankYouViewProps) {
  const router = useRouter();
  const { locale } = usePreferences();
  const isArabic = locale === "ar";

  const [copied, setCopied] = useState(false);
  const [fullName, setFullName] = useState(order.customer.fullName);
  const [phone, setPhone] = useState(order.customer.phone);
  const [address, setAddress] = useState(order.customer.address);

  const alreadyVerified = Boolean(order.notes?.includes("[✓"));
  const [isVerified, setIsVerified] = useState(alreadyVerified);
  const [isEditing, setIsEditing] = useState(false);
  const [savingContact, setSavingContact] = useState(false);
  const [contactError, setContactError] = useState("");

  const [addingUpsell, setAddingUpsell] = useState(false);
  const [upsellAdded, setUpsellAdded] = useState(false);

  function copyReference() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(order.reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  async function handleConfirmDetails(confirmOnly: boolean) {
    setSavingContact(true);
    setContactError("");
    try {
      const res = await fetch(`/api/orders/${order.id}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          confirmOnly
            ? { confirmOnly: true }
            : { fullName, phone, address, confirmOnly: false }
        )
      });
      const data = await res.json();
      setSavingContact(false);
      if (!res.ok) {
        setContactError(
          data.error ||
            (isArabic
              ? "يرجى التأكد من إدخال رقم هاتف مغربي صحيح."
              : "Veuillez saisir un numéro de téléphone marocain valide.")
        );
        return;
      }
      setFullName(data.fullName || fullName);
      setPhone(data.phone || phone);
      setAddress(data.address || address);
      setIsVerified(true);
      setIsEditing(false);
    } catch {
      setSavingContact(false);
      setContactError(
        isArabic
          ? "حدث خطأ أثناء حفظ البيانات، يرجى المحاولة مرة أخرى."
          : "Erreur de connexion, veuillez réessayer."
      );
    }
  }

  async function handleAddLastChanceUpsell() {
    if (!availableUpsell) return;
    setAddingUpsell(true);
    try {
      const res = await fetch(`/api/orders/${order.id}/upsell`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accept: true,
          offeredProductId: availableUpsell.productId
        })
      });
      if (res.ok) {
        setUpsellAdded(true);
        router.refresh();
      }
    } finally {
      setAddingUpsell(false);
    }
  }

  const itemsSummaryText = order.items
    .map((item) => `${item.productName} (x${item.quantity})`)
    .join(" + ");

  const whatsappText = encodeURIComponent(
    isArabic
      ? `السلام عليكم ROVANX، أؤكد طلبي رقم: ${order.reference}\n- الاسم: ${fullName}\n- الهاتف: ${phone}\n- العنوان: ${address}\n- الطلب: ${itemsSummaryText}\n- المجموع عند الاستلام: ${order.total} DH\nالمرجو إعطاء الأولوية لشحن طلبي في علبة سرية.`
      : `Bonjour ROVANX, je confirme ma commande N° ${order.reference} :\n- Nom : ${fullName}\n- Téléphone : ${phone}\n- Adresse : ${address}\n- Produits : ${itemsSummaryText}\n- Total COD : ${order.total} DH\nMerci d'expédier mon colis discret en priorité.`
  );

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* 1. HERO CELEBRATION BANNER */}
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/35 bg-gradient-to-b from-emerald-950/40 via-[#161923]/95 to-[#12141a] p-6 text-center shadow-2xl backdrop-blur-xl sm:p-10">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-400/50 bg-emerald-500/20 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          <CheckCircle2 size={36} />
        </div>

        <span className="badge mb-3 border-emerald-400/30 bg-emerald-500/15 text-xs font-black text-emerald-300">
          {isArabic ? "✓ تم تسجيل الطلب وحجز العبوات بنجاح" : "✓ Commande enregistrée & stock réservé"}
        </span>

        <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl">
          {isArabic
            ? `شكراً على ثقتك سي ${fullName}!`
            : `Merci pour votre confiance M. ${fullName} !`}
        </h1>

        <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
          {isArabic
            ? "طلبك الآن قيد المعالجة السرية في مستودع ROVANX. المرجو تأكيد رقم هاتفك أسفله لإعطاء الأولوية الفورية لشحن طردك."
            : "Votre commande est en cours de préparation confidentielle chez ROVANX. Veuillez vérifier votre numéro ci-dessous pour un envoi prioritaire."}
        </p>

        {/* Reference Pill with Copy */}
        <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black/40 px-4 py-2.5 text-sm">
          <span className="text-white/60">
            {isArabic ? "رقم الطلبية:" : "Référence :"}
          </span>
          <strong className="font-mono text-base font-black tracking-wider text-amber-400">
            {order.reference}
          </strong>
          <button
            type="button"
            onClick={copyReference}
            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-bold text-white/85 transition hover:bg-white/20"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span className="text-emerald-300">{isArabic ? "تم النسخ" : "Copié"}</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>{isArabic ? "نسخ" : "Copier"}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. FAST-TRACK PHONE & ADDRESS VERIFICATION + WHATSAPP INSTANT CONFIRM (Confirmation Rate Booster) */}
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Phone & Address Verification Card */}
        <div className="rounded-3xl border-2 border-amber-500/35 bg-white/[0.04] p-6 backdrop-blur-md shadow-xl sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="badge mb-2 border-amber-400/30 bg-amber-500/15 text-xs font-black text-amber-300">
                {isArabic ? "⚡ الخطوة الأهم لتسريع الشحن" : "⚡ Étape clé pour expédition rapide"}
              </span>
              <h2 className="text-xl font-black text-white sm:text-2xl">
                {isArabic
                  ? "تأكد من صحة رقم هاتفك وعنوانك"
                  : "Vérifiez votre numéro et adresse"}
              </h2>
            </div>
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-white/85 transition hover:border-amber-400 hover:text-amber-300"
              >
                <Edit3 size={13} />
                <span>{isArabic ? "تعديل" : "Modifier"}</span>
              </button>
            ) : null}
          </div>

          <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
            {isArabic
              ? "أكثر من 95% من التأخر في التوصيل سببه خطأ غير مقصود في رقم واحد بالهاتف. تأكد من معلوماتك الآن:"
              : "Assurez-vous que votre numéro de téléphone est exact afin que notre conseiller et le livreur puissent vous joindre :"}
          </p>

          {!isEditing ? (
            <div className="mt-4 space-y-2.5 rounded-2xl border border-white/10 bg-black/35 p-4 text-sm">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                <span className="text-white/55">{isArabic ? "الاسم الكامل:" : "Nom complet :"}</span>
                <strong className="font-bold text-white">{fullName}</strong>
              </div>
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                <span className="text-white/55">{isArabic ? "رقم الهاتف:" : "Téléphone :"}</span>
                <strong dir="ltr" className="rounded-lg bg-amber-500/20 px-2.5 py-0.5 font-mono text-base font-black text-amber-300">
                  {phone}
                </strong>
              </div>
              <div className="flex items-start justify-between gap-4 pt-0.5">
                <span className="text-white/55 shrink-0">{isArabic ? "عنوان التوصيل:" : "Adresse :"}</span>
                <strong className="text-right font-bold text-white/90">{address}</strong>
              </div>
            </div>
          ) : (
            <div className="mt-4 space-y-3 rounded-2xl border border-amber-400/30 bg-black/40 p-4">
              <div>
                <label className="mb-1 block text-xs font-bold text-white/75">
                  {isArabic ? "الاسم الكامل" : "Nom complet"}
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="input w-full text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-amber-300">
                  {isArabic ? "رقم الهاتف (10 أرقام)" : "Numéro de téléphone"}
                </label>
                <input
                  type="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input w-full font-mono text-base font-bold"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-white/75">
                  {isArabic ? "العنوان والمدينة" : "Adresse et ville"}
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input w-full text-sm"
                />
              </div>
              {contactError ? (
                <p className="text-xs font-bold text-red-400">{contactError}</p>
              ) : null}
              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  disabled={savingContact}
                  onClick={() => handleConfirmDetails(false)}
                  className="btn btn-primary flex-1 py-2.5 text-xs font-black"
                >
                  {savingContact ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : isArabic ? (
                    "حفظ وتأكيد المعلومات الصحيحة ✓"
                  ) : (
                    "Enregistrer et confirmer ✓"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setContactError("");
                  }}
                  className="rounded-xl border border-white/15 px-4 py-2 text-xs font-bold text-white/70 hover:text-white"
                >
                  {isArabic ? "إلغاء" : "Annuler"}
                </button>
              </div>
            </div>
          )}

          {!isEditing ? (
            <div className="mt-4">
              {isVerified ? (
                <div className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/15 p-3.5 text-xs font-black text-emerald-300 sm:text-sm">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span>
                    {isArabic
                      ? "تم تأكيد رقم هاتفك وعنوانك! طلبك الآن في أولوية التجهيز والشحن."
                      : "Vos coordonnées sont confirmées ! Votre colis est en préparation prioritaire."}
                  </span>
                </div>
              ) : (
                <button
                  type="button"
                  disabled={savingContact}
                  onClick={() => handleConfirmDetails(true)}
                  className="btn btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-sm font-black shadow-lg"
                >
                  {savingContact ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      <CheckCircle2 size={18} />
                      <span>
                        {isArabic
                          ? "نعم، رقم هاتفي وعنواني صحيحان (تأكيد فوري للطلب)"
                          : "Oui, mon numéro et mon adresse sont exacts (Confirmer)"}
                      </span>
                    </>
                  )}
                </button>
              )}
            </div>
          ) : null}
        </div>

        {/* WhatsApp Fast-Track Priority Card */}
        <div className="flex flex-col justify-between rounded-3xl border border-emerald-500/35 bg-gradient-to-b from-emerald-950/35 via-[#151c19]/90 to-[#12141a] p-6 shadow-xl backdrop-blur-md sm:p-7">
          <div>
            <span className="badge mb-2 border-emerald-400/30 bg-emerald-500/20 text-xs font-black text-emerald-300">
              {isArabic ? "🚀 تأكيد فوري عبر واتساب" : "🚀 Confirmation Express WhatsApp"}
            </span>
            <h3 className="text-xl font-black text-white">
              {isArabic
                ? "بغيتي الكولية تخرج ليك اليوم بلا ما تسنى المكالمة؟"
                : "Vous souhaitez expédier votre colis aujourd'hui sans attendre l'appel ?"}
            </h3>
            <p className="mt-2.5 text-xs leading-relaxed text-white/75 sm:text-sm">
              {isArabic
                ? "اضغط على الزر الأخضر أسفله لإرسال رسالة التأكيد الجاهزة مباشرة لخدمة الزبناء عبر واتساب. الطلبيات المؤكدة عبر واتساب تخرج في أول دفعة شحن!"
                : "Cliquez sur le bouton ci-dessous pour envoyer votre message de confirmation pré-rempli sur WhatsApp. Votre colis sera expédié en priorité absolue !"}
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-3.5 text-xs text-white/80">
              <div className="flex items-center gap-2 font-bold text-emerald-300">
                <Lock size={14} />
                <span>
                  {isArabic
                    ? "سرية تامة أثناء الاتصال والتسليم 100%"
                    : "Discrétion absolue lors de l'appel et de la livraison"}
                </span>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-white/65">
                {isArabic
                  ? "فريقنا يتصل من رقم عادي لتأكيد العنوان فقط بكل احترام، بدون ذكر اسم أو طبيعة المنتج نهائياً."
                  : "Notre équipe vous appelle uniquement pour valider l'adresse, sans jamais mentionner la nature du produit."}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-5 py-4 text-center text-sm font-black text-graphite-950 shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-[#20bd5a]"
          >
            <MessageCircle size={20} className="fill-graphite-950" />
            <span>
              {isArabic
                ? "تأكيد طلبي الآن عبر واتساب (أولوية الشحن)"
                : "Confirmer ma commande sur WhatsApp"}
            </span>
          </a>
        </div>
      </div>

      {/* 3. VISUAL 3-STEP DELIVERY TIMELINE (Delivery Rate Booster) */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md shadow-xl sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="badge mb-1.5 border-bronze-400/30 bg-bronze-500/15 text-xs font-bold text-bronze-300">
              {isArabic ? "مراحل تجهيز وتسليم طردك" : "Étapes de préparation et livraison"}
            </span>
            <h2 className="text-xl font-black text-white sm:text-2xl">
              {isArabic ? "شنو غادي يوقع دابا؟ (3 خطوات بسيطة)" : "Que se passe-t-il maintenant ? (3 étapes)"}
            </h2>
          </div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">
            {isArabic ? "🚚 شحن سري ومجاني لجميع المدن" : "🚚 Livraison discrète & gratuite au Maroc"}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Step 1 */}
          <div className="relative rounded-2xl border border-emerald-500/35 bg-emerald-500/[0.07] p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-sm font-black text-graphite-950">
                1
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-black text-emerald-300">
                {isArabic ? "تمت الآن ✓" : "Effectué ✓"}
              </span>
            </div>
            <h3 className="text-base font-black text-white">
              {isArabic ? "حجز العبوات الأصلية والتغليف السري" : "Réservation & Emballage Neutre"}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-white/75">
              {isArabic
                ? "تم تسجيل طلبك وحجز عبواتك الأصلية في علبة كرتونية محايدة ومغلقة بإحكام بدون أي شعار أو إشارة لمحتوى الطرد."
                : "Vos produits originaux sont réservés et préparés dans un carton neutre scellé sans aucun logo ni mention extérieure."}
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-2xl border border-amber-500/35 bg-amber-500/[0.07] p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-sm font-black text-graphite-950">
                2
              </span>
              <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[11px] font-black text-amber-300">
                {isArabic ? "خلال الساعات القادمة 📞" : "Dans les prochaines heures 📞"}
              </span>
            </div>
            <h3 className="text-base font-black text-white">
              {isArabic ? "مكالمة تأكيد سريعة وسرية" : "Appel discret de validation"}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-white/75">
              {isArabic
                ? "سيتصل بك مستشارنا لتأكيد العنوان فقط بكل احترام وسرية. المرجو إبقاء هاتفك قريباً ومشغلاً (أو أكد فوراً عبر واتساب أعلاه)."
                : "Notre conseiller vous contactera discrètement pour confirmer l'adresse. Gardez votre téléphone allumé (ou confirmez directement via WhatsApp)."}
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl border border-white/15 bg-white/[0.03] p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-sm font-black text-white">
                3
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold text-white/80">
                {isArabic ? "24 إلى 48 ساعة 📦" : "Sous 24h à 48h 📦"}
              </span>
            </div>
            <h3 className="text-base font-black text-white">
              {isArabic ? "الاستلام، فحص الطرد ثم الدفع" : "Réception, Contrôle & Paiement COD"}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-white/75">
              {isArabic
                ? "يتصل بك الموزع لتسليمك الطرد يداً بيد في المكان الذي يناسبك. لك كامل الحق في فتح وفحص الطرد قبل دفع المبلغ."
                : "Le livreur vous appelle pour vous remettre le colis en main propre. Vous avez le droit de vérifier votre colis avant de payer."}
            </p>
          </div>
        </div>
      </div>

      {/* 4. LAST-CHANCE 1-CLICK VIP UPSELL ON THANK YOU PAGE (AOV & Conversion Booster) */}
      {availableUpsell && !upsellAdded ? (
        <div className="overflow-hidden rounded-3xl border-2 border-amber-500/45 bg-gradient-to-r from-[#241318] via-[#181a24] to-[#141720] p-6 shadow-2xl sm:p-8">
          <div className="grid gap-6 md:grid-cols-[160px_1fr] md:items-center">
            <div className="relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-4">
              <span className="absolute -top-2.5 right-2 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[11px] font-black text-graphite-950">
                {isArabic
                  ? `وفّر ${Math.max(0, availableUpsell.regularPrice - availableUpsell.upsellPrice)} DH`
                  : `-${Math.max(0, availableUpsell.regularPrice - availableUpsell.upsellPrice)} DH`}
              </span>
              <img
                src={availableUpsell.imageSrc}
                alt={availableUpsell.name}
                className="h-32 w-auto object-contain drop-shadow-xl"
              />
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/15 px-3 py-1 text-xs font-black text-amber-300">
                <Sparkles size={13} />
                <span>
                  {isArabic
                    ? "فرصة أخيرة قبل إغلاق طردك السري (شحن مجاني 0 DH)"
                    : "Dernière chance avant fermeture de votre colis (Livraison 0 DH)"}
                </span>
              </div>

              <h3 className="text-xl font-black text-white sm:text-2xl">
                {isArabic ? availableUpsell.headlineAr : availableUpsell.headlineFr}
              </h3>

              <p className="text-xs leading-relaxed text-white/75 sm:text-sm">
                {isArabic ? availableUpsell.descAr : availableUpsell.descFr}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs text-white/50">
                    {isArabic ? "سعر الإضافة الحصري:" : "Prix VIP :"}
                  </span>
                  <strong className="text-2xl font-black text-amber-400">
                    <Money value={availableUpsell.upsellPrice} />
                  </strong>
                  <span className="text-sm text-white/40 line-through">
                    <Money value={availableUpsell.regularPrice} />
                  </span>
                </div>

                <button
                  type="button"
                  disabled={addingUpsell}
                  onClick={handleAddLastChanceUpsell}
                  className="btn btn-primary flex items-center gap-2 px-6 py-3 text-xs font-black shadow-lg sm:text-sm"
                >
                  {addingUpsell ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      <span>
                        {isArabic
                          ? `أضف ${availableUpsell.name} لطردي الآن بضغطة واحدة`
                          : `Ajouter ${availableUpsell.name} à mon colis en 1 clic`}
                      </span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {upsellAdded ? (
        <div className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/15 p-4 text-sm font-black text-emerald-300">
          <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
          <span>
            {isArabic
              ? "تمت إضافة العرض الحصري لطردك بنجاح بدون أي مصاريف شحن إضافية!"
              : "L'offre VIP a été ajoutée à votre colis avec succès sans frais de port supplémentaires !"}
          </span>
        </div>
      ) : null}

      {/* 5. COMPLETE ORDER SUMMARY RECEIPT + GUARANTEES */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md shadow-xl sm:p-8">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={20} className="text-bronze-400" />
            <h2 className="text-xl font-black text-white">
              {isArabic ? "ملخص طلبيتك" : "Récapitulatif de votre commande"}
            </h2>
          </div>
          <span className="rounded-lg bg-white/10 px-2.5 py-1 font-mono text-xs font-bold text-white/80">
            {order.reference}
          </span>
        </div>

        <div className="divide-y divide-white/10">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 p-1.5">
                  <img
                    src={item.imageSrc}
                    alt={item.productName}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-black text-white">{item.productName}</h3>
                    <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs font-bold text-amber-300">
                      x{item.quantity}
                    </span>
                    {item.isUpsell ? (
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-black text-emerald-300">
                        {isArabic ? "عرض VIP مضاف ✓" : "Offre VIP ✓"}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-0.5 text-xs text-white/55">
                    {isArabic ? "منتج أصلي مضمون 100% — تغليف سري" : "Produit 100% original — Emballage neutre"}
                  </p>
                </div>
              </div>
              <strong className="text-base font-black text-white">
                <Money value={item.total} />
              </strong>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-4 space-y-2.5 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm">
          {order.discountTotal > 0 ? (
            <>
              <div className="flex justify-between text-white/65">
                <span>{isArabic ? "المجموع قبل التخفيض:" : "Sous-total :"}</span>
                <span className="line-through">
                  <Money value={order.subtotal} />
                </span>
              </div>
              <div className="flex justify-between font-bold text-emerald-400">
                <span>{isArabic ? "قيمة التوفير (خصم الباقة / العرض):" : "Votre économie :"}</span>
                <span>
                  - <Money value={order.discountTotal} />
                </span>
              </div>
            </>
          ) : null}

          <div className="flex justify-between text-white/80">
            <span>{isArabic ? "التوصيل السري لجميع المدن:" : "Livraison discrète :"}</span>
            <strong className="text-emerald-400">
              {isArabic ? "مجاني (0 DH)" : "Gratuite (0 DH)"}
            </strong>
          </div>

          <div className="flex items-baseline justify-between border-t border-white/10 pt-3 text-lg">
            <span className="font-black text-white">
              {isArabic ? "المبلغ الإجمالي للدفع عند الاستلام:" : "Total à payer à la livraison (COD) :"}
            </span>
            <strong className="text-2xl font-black text-amber-400">
              <Money value={order.total} />
            </strong>
          </div>
        </div>

        {/* 4-Badge Reassurance Footer inside Receipt */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs font-bold text-white/80">
            <PackageCheck size={18} className="text-bronze-400 shrink-0" />
            <span>{isArabic ? "كرتونة محايدة بدون أي شعار خارجي" : "Colis neutre sans logo extérieur"}</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs font-bold text-white/80">
            <Eye size={18} className="text-emerald-400 shrink-0" />
            <span>{isArabic ? "حق معاينة وفحص الطرد قبل الأداء" : "Vérification du colis avant paiement"}</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs font-bold text-white/80">
            <ShieldCheck size={18} className="text-amber-400 shrink-0" />
            <span>{isArabic ? "مكملات طبيعية أصلية ومضمونة 100%" : "Formules 100% naturelles certifiées"}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-6">
          <Link
            href="/shop"
            className="rounded-xl border border-white/15 bg-white/[0.05] px-5 py-2.5 text-xs font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            {isArabic ? "العودة لتصفح المتجر" : "Retourner à la boutique"}
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-bronze-400/30 bg-bronze-500/15 px-5 py-2.5 text-xs font-bold text-bronze-300 transition hover:bg-bronze-500/25"
          >
            {isArabic ? "اقرأ نصائحنا الطبية لتحقيق أفضل نتيجة" : "Lire nos conseils d'utilisation sur le Blog"}
          </Link>
        </div>
      </div>
    </div>
  );
}
