import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line pb-28 pt-8 text-sm text-mute md:pb-10">
      <div className="container-x flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display text-base font-semibold text-bone">
            Stuccord<span className="text-ember">.</span>
          </span>{" "}
          {site.footer.line}
        </p>
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location.town}, {site.location.country}
        </p>
      </div>
    </footer>
  );
}
