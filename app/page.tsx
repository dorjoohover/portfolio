const featuredProjects = [
  {
    name: "Hire систем",
    url: "https://www.hire.mn",
    state: "Ашиглалтад орсон",
    variant: "hire",
    summary:
      "Зан төлөвийн тест авдаг платформ. Веб, admin, core систем болон report, PDF builder хэсгээс бүрдэнэ.",
    details: [
      "V1 хувилбар ашиглалтад орсон.",
      "Дараагийн version-ийн хөгжүүлэлт явагдаж байна.",
      "Олон урсгалтай бүтэцтэй систем тул хэрэглэгч, админ, тайлангийн хэсгүүдийг уялдуулж шийдсэн.",
    ],
  },
  {
    name: "Zunailbar систем",
    url: "https://zunailbar.mn",
    state: "Ашиглалтад орсон",
    variant: "zunailbar",
    summary:
      "Танилцуулга болон захиалга авах систем. Веб, admin, core хэсэгтэй бөгөөд цаг авах урсгалтай.",
    details: [
      "Production орчинд ашиглагдаж байгаа бодит систем.",
      "Захиалга, цаг товлолт, контент удирдлагыг нэг дороос зохицуулдаг.",
    ],
  },
  {
    name: "Eunit систем",
    url: "https://eunit.mn",
    state: "Хөгжүүлэлт түр зогссон",
    variant: "eunit",
    summary:
      "Мэдээлэл дээр тулгуурлан үл хөдлөх болон машины үнэ тооцдог систем.",
    details: [
      "Дата дээр суурилсан үнэлгээний логик, тооцооллын урсгалтай.",
      "Одоогоор түр зогссон боловч концепц болон системийн чиглэл нь тодорхой.",
    ],
  },
] as const;

const workPrinciples = [
  "Ажил эхлэхээс өмнө шаардлагаа тодорхой болгож, scope-г хамт баталгаажуулна.",
  "Тохирсон ажлын хүрээнд ажиллана. Нэмэлт ажил тусдаа үнэлэгдэнэ.",
  "Ажлын явцад үе шат бүр дээр мэдээлэл өгч, шийдвэр гаргалтыг ил тод байлгана.",
  "2-3 удаагийн жижиг засвар үндсэн үнэд багтана.",
  "Том өөрчлөлт, шинэ функц нэмэх бол нэмэлт ажилд тооцно.",
  "Системийн алдаа гарвал үнэ төлбөргүй засварлана.",
  "Дараагийн шатны хөгжүүлэлтэд testing server ашиглах боломжтой.",
  "UI/UX дизайн шаардлагатай бол Figma болон Figma Make ашиглан тусад нь гаргаж болно.",
  "Төсөл дээр хяналт тавих, шийдвэр гаргах хүн байх шаардлагатай.",
  "Материал, текст, санал, тестийг нэгтгэх хариуцсан хүн байвал ажил илүү хурдан явна.",
] as const;

const technologies = ["NestJS", "NextJS", "PostgreSQL", "MongoDB", "Docker"] as const;

const deploymentOptions = [
  {
    title: "Энгийн систем",
    description:
      "Цаашид өргөжихгүй, хөнгөн веб эсвэл танилцуулгын систем бол VPS заавал шаардлагагүй байж болно.",
  },
  {
    title: "Хурдан байршуулалт",
    description:
      "MongoDB болон Vercel ашиглан ийм төрлийн зарим төслийг хөнгөн, хурдан байршуулж болно.",
  },
  {
    title: "Томрох боломжтой систем",
    description:
      "Тусдаа backend, тогтмол ажиллагаа, илүү хяналт шаардсан тохиолдолд VPS эсвэл server шаардлагатай.",
  },
] as const;

const extraCosts = [
  "Server (VPS)",
  "Domain",
  "Cloud storage (S3)",
  "Email",
  "SMS",
  "Payment үйлчилгээ",
] as const;

const priceRanges = [
  { label: "Landing page", value: "500,000 - 2,500,000₮" },
  { label: "Веб сайт", value: "2,000,000 - 5,000,000₮" },
  { label: "Admin систем", value: "2,000,000 - 6,000,000₮" },
  { label: "Booking систем", value: "4,000,000 - 10,000,000₮" },
  { label: "Том систем", value: "10,000,000₮+" },
] as const;

const paymentTerms = [
  "Том төсөлд 50% урьдчилгаа, 50% дууссаны дараа.",
  "Жижиг ажлыг дууссаны дараа төлөхөөр тохирч болно.",
  "Эсвэл үе шаттай төлбөрийн хувилбараар ажиллаж болно.",
] as const;

const quickFacts = [
  { label: "Төслүүд", value: "3+" },
  { label: "Жижиг засвар", value: "2-3" },
  { label: "Туршлага", value: "4 жил" },
] as const;

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]">
        {kicker}
      </p>
      <h2 className="font-[family:var(--font-display)] text-3xl leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
        {description}
      </p>
    </div>
  );
}

function ProjectVisual({
  variant,
  domain,
  status,
}: {
  variant: (typeof featuredProjects)[number]["variant"];
  domain: string;
  status: string;
}) {
  return (
    <div className={`project-visual project-visual--${variant}`}>
      <span className="project-pill left-4 top-4">{domain}</span>
      <span className="project-pill bottom-4 right-4">{status}</span>
      <div className="project-visual-card">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-strong)]">
          System build
        </p>
        <p className="mt-2 font-[family:var(--font-display)] text-xl text-[var(--foreground)]">
          {variant === "hire"
            ? "Report / PDF"
            : variant === "zunailbar"
              ? "Booking flow"
              : "Үнэ тооцоолол"}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8 lg:px-10">
        <header className="mx-auto flex max-w-5xl items-center justify-between border-b border-black/8 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]">
              Portfolio
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Веб болон систем хөгжүүлэлт
            </p>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-[var(--muted)] md:flex">
            <a href="#projects">Projects</a>
            <a href="#workflow">About</a>
            <a href="#pricing">Pricing</a>
          </nav>
        </header>

        <section className="mx-auto mt-10 grid max-w-5xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]">
              4 жил туршлага
            </span>

            <div className="space-y-4">
              <h1 className="font-[family:var(--font-display)] text-4xl leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Тодорхой бүтэцтэй, цэвэр харагдах веб болон системийн танилцуулга.
              </h1>
              <p className="max-w-xl text-sm leading-8 text-[var(--muted)] sm:text-base">
                Танилцуулга вебсайт, admin систем, booking урсгал болон
                удаан хугацаанд тогтвортой ажиллах dynamic site зэрэг бодит
                хэрэглээнд чиглэсэн шийдлүүдийг хөгжүүлнэ. Ажлын хүрээг
                урьдчилж тодорхойлж, явц бүр дээр мэдээлэл өгч, хэрэгтэй үед
                дараагийн шат руу өргөжүүлэх боломжтой бүтэцтэй ажиллана. AI
                ашиглан хийх боломжтой ажлууд дээр төслийг илүү хурдан
                гүйцэтгэх боломжтой.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a className="editorial-button editorial-button--primary" href="#projects">
                Төслүүд үзэх
              </a>
              <a className="editorial-button editorial-button--ghost" href="#pricing">
                Үнийн санал
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="editorial-card rounded-[24px] p-4">
                  <p className="font-[family:var(--font-display)] text-2xl text-[var(--foreground)]">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-figure">
            <span className="hero-label">Portfolio preview</span>
            <div className="hero-sheet">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-strong)]">
                Clean workflow
              </p>
              <h2 className="mt-3 font-[family:var(--font-display)] text-3xl leading-tight text-[var(--foreground)]">
                Шаардлагаас эхлээд launch хүртэл.
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                <li>Scope тодорхойлно</li>
                <li>Тогтмол update өгнө</li>
                <li>Testing server дээр баталгаажуулна</li>
              </ul>
            </div>
            <div className="hero-mini-note">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted-strong)]">
                AI workflow
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--foreground)]">
                AI ашиглаж хийх боломжтой хэсгүүд дээр ажлыг илүү хурдан
                урагшлуулах боломжтой.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto mt-20 max-w-5xl space-y-8">
          <SectionHeading
            kicker="Projects"
            title="Хийсэн төслүүд"
            description="Танилцуулга, booking, admin болон custom системүүдийг илүү ойлгомжтой, цэгцтэй интерфейстэйгээр хөгжүүлсэн жишээнүүд."
          />

          <div className="space-y-5">
            {featuredProjects.map((project, index) => (
              <article
                key={project.name}
                className="grid gap-4 rounded-[32px] bg-white p-4 shadow-[0_24px_70px_rgba(31,29,26,0.06)] ring-1 ring-black/5 md:grid-cols-2 md:p-5"
              >
                <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                  <ProjectVisual
                    variant={project.variant}
                    domain={project.url.replace("https://", "")}
                    status={project.state}
                  />
                </div>

                <div className="flex flex-col justify-between rounded-[26px] bg-[var(--card-soft)] p-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-[family:var(--font-display)] text-3xl leading-tight text-[var(--foreground)]">
                        {project.name}
                      </h3>
                      <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)] ring-1 ring-black/6">
                        {project.state}
                      </span>
                    </div>

                    <p className="text-sm leading-7 text-[var(--muted)]">
                      {project.summary}
                    </p>

                    <ul className="space-y-3 text-sm leading-7 text-[var(--foreground)]/85">
                      {project.details.map((detail) => (
                        <li key={detail} className="rounded-[18px] bg-white px-4 py-3 ring-1 ring-black/5">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/8 px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:bg-white"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.url.replace("https://", "")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="workflow"
          className="mx-auto mt-20 grid max-w-5xl gap-6 lg:grid-cols-[1.08fr_0.92fr]"
        >
          <article className="editorial-card rounded-[32px] p-6 sm:p-8">
            <SectionHeading
              kicker="About"
              title="Ажлын нөхцөл"
              description="Төсөл ойлгомжтой, тайван, хэт сунжрахгүй явахын тулд дараах нөхцөлүүдийг урьдчилж тохирвол илүү үр дүнтэй."
            />

            <div className="mt-7 grid gap-3">
              {workPrinciples.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[20px] bg-[var(--card-soft)] px-4 py-4 ring-1 ring-black/5"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <p className="text-sm leading-7 text-[var(--foreground)]/88">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="space-y-6">
            <article className="editorial-card rounded-[32px] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]">
                Tech stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {technologies.map((technology) => (
                  <span key={technology} className="tech-chip">
                    {technology}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Төслийн хэмжээнээс шалтгаалан frontend, backend, database,
                deployment орчныг хөнгөн эсвэл өргөжих боломжтой байдлаар сонгоно.
              </p>
            </article>

            <article className="editorial-card rounded-[32px] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]">
                Ашиглах боломжтой хувилбар
              </p>
              <div className="mt-4 space-y-4">
                {deploymentOptions.map((option) => (
                  <div key={option.title} className="rounded-[22px] bg-[var(--card-soft)] p-4 ring-1 ring-black/5">
                    <h3 className="font-[family:var(--font-display)] text-xl text-[var(--foreground)]">
                      {option.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="editorial-card rounded-[32px] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]">
                Нэмэлт зардал
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Эдгээр гуравдагч талын үйлчилгээний төлбөр хөгжүүлэлтийн үнэд
                ороогүй бөгөөд захиалагч талаас тусад нь хариуцагдана.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {extraCosts.map((item) => (
                  <span key={item} className="soft-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="pricing" className="mx-auto mt-20 max-w-5xl space-y-8">
          <SectionHeading
            kicker="Pricing"
            title="Жишиг үнэ ба дараагийн алхам"
            description="Төслийн бодит үнэ нь ажлын хэмжээ, төвөгшил, интеграц, хугацаанаас хамаарна. Доорх нь эхний чиг баримжаа үнэ."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {priceRanges.map((range) => (
              <article key={range.label} className="editorial-card rounded-[28px] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--muted-strong)]">
                  {range.label}
                </p>
                <p className="mt-4 font-[family:var(--font-display)] text-3xl leading-tight text-[var(--foreground)]">
                  {range.value}
                </p>
              </article>
            ))}
          </div>

          <div className="accent-panel rounded-[36px] px-5 py-6 sm:px-8 sm:py-8">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-[28px] bg-white/90 p-6 ring-1 ring-black/5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]">
                  Төлбөрийн нөхцөл
                </p>
                <div className="mt-4 space-y-3">
                  {paymentTerms.map((term, index) => (
                    <div
                      key={term}
                      className="grid grid-cols-[2.2rem_1fr] gap-3 rounded-[18px] bg-[var(--card-soft)] p-3"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] font-semibold text-[var(--foreground)]">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-7 text-[var(--foreground)]/88">{term}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[28px] bg-white/90 p-6 ring-1 ring-black/5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]">
                  Нэмэлт тайлбар
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                  <p>
                    UI/UX дизайн шаардлагатай бол Figma болон Figma Make
                    ашиглан тусад нь гаргаж болно.
                  </p>
                  <p>
                    Төсөл эхлэхээс өмнө материал, текст, санал хүсэлтээ нэгтгэх
                    хүнтэй байвал ажил илүү хурдан урагшилна.
                  </p>
                  <p>
                    Тогтвортой, цаашдаа өргөжих боломжтой сайт эсвэл систем бол
                    эхний шаардлагаа зөв тодорхойлох нь хамгийн чухал байдаг.
                  </p>
                </div>
              </article>
            </div>

            <footer className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-black/8 pt-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center">
              <p>Portfolio site / 2026</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://www.hire.mn" target="_blank" rel="noreferrer">
                  hire.mn
                </a>
                <a href="https://zunailbar.mn" target="_blank" rel="noreferrer">
                  zunailbar.mn
                </a>
                <a href="https://eunit.mn" target="_blank" rel="noreferrer">
                  eunit.mn
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
