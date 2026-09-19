import CustomizeForm from "@/components/CustomizeForm";

export const metadata = {
  title: "Customize your gift",
};

export default function CustomizePage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-2 md:py-16">
      <div>
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Made to order</p>
        <h1 className="serif mt-3 text-4xl text-ink md:text-5xl">Customize your gift</h1>
        <p className="mt-5 max-w-md text-sm leading-7 text-ink/75">
          Names, wrapping colours, hamper extras, and the exact mood you want. Share as much as you
          know — we can fill the rest.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-ink/75">
          <li>Bouquet colour stories</li>
          <li>Hampers for her, him, or a mixed table</li>
          <li>Cards, gift cards, and keep-forever pieces</li>
        </ul>
      </div>
      <CustomizeForm />
    </div>
  );
}
