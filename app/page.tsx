const featuredProjects = [
  {
    name: "Hire систем",
    url: "https://www.hire.mn",
    state: "Хөгжүүлэлт үргэлжилж байна",
    tone: "active",
    summary:
      "Зан төлөвийн тест авдаг, олон хэсэгтэй платформ. Веб, admin, core систем болон report, PDF builder хэсгээс бүрдэнэ.",
    details: [
      "V1 хувилбар дууссан бөгөөд дараагийн шатны хөгжүүлэлт үргэлжилж байгаа.",
      "Платформын бүтэц нь хэрэглэгчийн урсгал, удирдлагын хэсэг, тайлангийн автомат үүсгэгчийг хамарсан.",
    ],
  },
  {
    name: "Zunailbar систем",
    url: "https://zunailbar.mn",
    state: "Ашиглалтад орсон",
    tone: "live",
    summary:
      "Танилцуулга болон захиалга авах систем. Веб, admin, core хэсэгтэй бөгөөд захиалга, цаг авах урсгалыг дэмждэг.",
    details: [
      "Бодит хэрэглээнд ашиглагдаж буй production систем.",
      "Захиалга хүлээн авах, цаг товлох, агуулга удирдах урсгалыг нэгтгэсэн.",
    ],
  },
  {
    name: "Eunit систем",
    url: "https://eunit.mn",
    state: "Түр зогссон",
    tone: "paused",
    summary:
      "Мэдээлэл дээр тулгуурлан үл хөдлөх болон машины үнэ тооцдог систем.",
    details: [
      "Дата төвтэй тооцоолол, үнэлгээний логик дээр суурилсан шийдэл.",
      "Хөгжүүлэлт одоогоор түр зогссон ч суурь концепц болон системийн чиглэл тодорхой.",
    ],
  },
] as const;

const workPrinciples = [
  "Ажил эхлэхээс өмнө шаардлагыг тодорхой болгож, хүрээ болон зорилгыг тохирно.",
  "Тохирсон ажлын хүрээнд ажиллана, нэмэлт ажил тусдаа үнэлэгдэнэ.",
  "Явцын үе шат бүр дээр мэдээлэл өгч, шийдвэрийг ойлгомжтой байдлаар баталгаажуулна.",
  "2-3 удаагийн жижиг засвар үндсэн үнэд багтана.",
  "Том өөрчлөлт, шинэ функц нэмэх бол нэмэлт ажилд тооцно.",
  "Системийн алдаа гарвал үнэ төлбөргүй засварлана.",
  "Дараагийн шатны хөгжүүлэлт, шалгалтад testing server ашиглаж болно.",
  "UI/UX дизайн шаардлагатай бол Figma болон Figma Make ашиглан тусад нь гаргах боломжтой.",
  "Төсөл дээр хяналт тавих, шийдвэр гаргах хүнтэй байх шаардлагатай.",
  "Материал, текст, санал, тестийг нэгтгэх хариуцсан хүнтэй байвал ажил илүү хурдан урагшилна.",
] as const;

const technologies = [
  "NestJS",
  "NextJS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
] as const;

const solutionOptions = [
  {
    title: "Энгийн, цаашид өргөжихгүй систем",
    description:
      "Landing, танилцуулга, эсвэл хөнгөн веб систем бол VPS заавал шаардахгүй байж болно.",
    notes: [
      "MongoDB болон Vercel дээр хурдан байршуулж болно.",
      "Үйлчилгээний зардлыг бага түвшинд барихад тохиромжтой.",
    ],
  },
  {
    title: "Өргөжих боломжтой, тусдаа backend-тэй систем",
    description:
      "Тогтмол ажиллагаа, өндөр хяналт, backend тусгаарлалт шаардсан үед VPS эсвэл dedicated server хэрэгтэй.",
    notes: [
      "Томрох магадлалтай бүтээгдэхүүнд архитектурын хувьд илүү зөв сонголт.",
      "Нөөц, uptime, background process зэрэг шаардлагад илүү нийцнэ.",
    ],
  },
] as const;

const extraCosts = [
  "Server (VPS)",
  "Domain",
  "Cloud storage (S3)",
  "Email үйлчилгээ",
  "SMS үйлчилгээ",
  "Payment gateway",
] as const;

const priceRanges = [
  { label: "Landing page", price: "500,000 - 2,500,000₮" },
  { label: "Веб сайт", price: "2,000,000 - 5,000,000₮" },
  { label: "Admin систем", price: "2,000,000 - 6,000,000₮" },
  { label: "Booking систем", price: "4,000,000 - 10,000,000₮" },
  { label: "Том систем", price: "10,000,000₮+" },
] as const;

const paymentTerms = [
  "Том төсөлд 50% урьдчилгаа, 50% дууссаны дараа төлж болно.",
  "Жижиг ажлыг дууссаны дараа төлөхөөр тохиролцож болно.",
  "Эсвэл үе шаттай төлбөрийн хувилбарыг төсөл бүр дээр тусад нь тохируулж болно.",
] as const;

const quickStats = [
  { value: "3 төсөл", label: "Бодит жишээтэй танилцуулга" },
  { value: "2-3 удаа", label: "Жижиг засвар үнэд багтана" },
  { value: "NextJS + NestJS", label: "Орчин үеийн веб стек" },
] as const;

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]">
        {eyebrow}
      </p>
      <h2 className="font-[family:var(--font-display)] text-3xl leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function statusClasses(tone: (typeof featuredProjects)[number]["tone"]) {
  switch (tone) {
    case "live":
      return "bg-emerald-500/15 text-emerald-900 ring-1 ring-emerald-700/15";
    case "paused":
      return "bg-amber-500/15 text-amber-900 ring-1 ring-amber-700/15";
    default:
      return "bg-cyan-500/15 text-cyan-900 ring-1 ring-cyan-700/15";
  }
}

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="float-slow absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(17,148,145,0.32),_transparent_68%)] blur-3xl" />
        <div className="absolute right-[-10rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(255,141,97,0.26),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-14rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(19,46,43,0.14),_transparent_72%)] blur-3xl" />
      </div>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 pb-20 pt-6 sm:px-8 lg:px-10 lg:pb-24">
        <header className="reveal glass-panel flex flex-col gap-8 rounded-[2rem] px-6 py-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted-strong)]">
                Portfolio / Services
              </p>
              <h1 className="max-w-3xl font-[family:var(--font-display)] text-4xl leading-none tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-7xl">
                Веб болон систем хөгжүүлэлтийг тодорхой бүтэцтэй, цэвэр шийдлээр.
              </h1>
            </div>

            <nav className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              <a className="chip" href="#projects">
                Төслүүд
              </a>
              <a className="chip" href="#workflow">
                Ажлын нөхцөл
              </a>
              <a className="chip" href="#pricing">
                Үнийн санал
              </a>
            </nav>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end">
            <div className="space-y-8">
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                Танилцуулга вебсайт, admin систем, booking урсгал, data-driven
                тооцоолол гээд бодит хэрэглээнд чиглэсэн системүүдийг NextJS,
                NestJS болон найдвартай backend архитектур дээр хөгжүүлнэ.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a className="cta-primary" href="#projects">
                  Хийсэн төслүүд үзэх
                </a>
                <a className="cta-secondary" href="#pricing">
                  Үнийн жишиг харах
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] bg-white/70 p-5 ring-1 ring-black/6">
                    <p className="font-[family:var(--font-display)] text-2xl tracking-tight text-[var(--foreground)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="glass-card reveal rounded-[2rem] p-6 [animation-delay:140ms]">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--muted-strong)]">
                    Ажлын урсгал
                  </p>
                  <span className="rounded-full bg-[var(--accent)]/12 px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                    Ил тод
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Шаардлагаа тодорхой болгоно",
                      text: "Ажил эхлэхээс өмнө зорилго, хүрээ, хүлээлтийг нэг мөр болгоно.",
                    },
                    {
                      step: "02",
                      title: "Явцыг тогтмол мэдээлнэ",
                      text: "Үе шат бүр дээр явц, шийдвэр, шаардлагатай өөрчлөлтийг ойлгомжтой хүргэнэ.",
                    },
                    {
                      step: "03",
                      title: "Хөгжүүлэлт, засвар, дэмжлэг",
                      text: "Жижиг засвар үнэд багтана, системийн алдааг үнэ төлбөргүй засна.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.5rem] bg-[var(--ink-soft)]/80 p-4"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-white">
                        {item.step}
                      </span>
                      <div className="space-y-1">
                        <p className="text-base font-semibold text-[var(--foreground)]">
                          {item.title}
                        </p>
                        <p className="text-sm leading-6 text-[var(--muted)]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </header>

        <section
          id="projects"
          className="reveal space-y-10 [animation-delay:180ms]"
        >
          <SectionIntro
            eyebrow="Хийсэн төслүүд"
            title="Өөр өөр хэрэгцээнд зориулсан системүүд"
            description="Танилцуулга сайт, booking урсгал, admin хэсэг, data-driven тооцоолол зэрэг бодит хэрэгцээн дээр суурилсан төслүүдээс."
          />

          <div className="grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="glass-card flex h-full flex-col justify-between rounded-[2rem] p-6"
              >
                <div className="space-y-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-2">
                      <h3 className="font-[family:var(--font-display)] text-2xl tracking-tight text-[var(--foreground)]">
                        {project.name}
                      </h3>
                      <a
                        className="text-sm font-medium text-[var(--accent-strong)] transition hover:text-[var(--foreground)]"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.url.replace("https://", "")}
                      </a>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses(
                        project.tone,
                      )}`}
                    >
                      {project.state}
                    </span>
                  </div>

                  <p className="text-base leading-7 text-[var(--muted)]">
                    {project.summary}
                  </p>

                  <ul className="space-y-3 text-sm leading-6 text-[var(--muted)]">
                    {project.details.map((detail) => (
                      <li
                        key={detail}
                        className="rounded-[1.25rem] bg-white/60 px-4 py-3 ring-1 ring-black/5"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="workflow"
          className="reveal grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] [animation-delay:240ms]"
        >
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <SectionIntro
              eyebrow="Ажлын нөхцөл"
              title="Төсөл ойлгомжтой явахын тулд урьдчилж тохирох зүйлс"
              description="Хүрээ, шийдвэр гаргах процесс, засварын нөхцөл, дэмжлэгийн хэлбэр тодорхой байвал төсөл хурдан бөгөөд тайван урагшилдаг."
            />

            <div className="mt-8 grid gap-3">
              {workPrinciples.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[1.25rem] bg-white/65 px-4 py-4 ring-1 ring-black/5"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--highlight)]" />
                  <p className="text-sm leading-7 text-[var(--foreground)]/88">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="glass-card rounded-[2rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--muted-strong)]">
                Технологи
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span key={technology} className="tech-pill">
                    {technology}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                Төслийн хэрэгцээнээс шалтгаалан frontend, backend, database,
                deployment орчныг салгаж эсвэл хөнгөн байдлаар нэгтгэж сонгоно.
              </p>
            </div>

            <div className="glass-card rounded-[2rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--muted-strong)]">
                Ашиглах боломжтой хувилбар
              </p>
              <div className="mt-5 space-y-4">
                {solutionOptions.map((option) => (
                  <div
                    key={option.title}
                    className="rounded-[1.5rem] bg-white/65 p-5 ring-1 ring-black/5"
                  >
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {option.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      {option.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--foreground)]/80">
                      {option.notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--muted-strong)]">
                Нэмэлт зардал
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Дараах гуравдагч талын үйлчилгээний төлбөр хөгжүүлэлтийн үнэд
                ороогүй бөгөөд сар эсвэл жилээр тусдаа төлөгдөнө.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {extraCosts.map((cost) => (
                  <span key={cost} className="chip">
                    {cost}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="reveal space-y-10 [animation-delay:300ms]"
        >
          <SectionIntro
            eyebrow="Үнийн санал"
            title="Төслийн хэмжээ, төвөгшлөөс хамаарсан жишиг үнэ"
            description="Эдгээр нь эхний түвшний чиг баримжаа үнэ бөгөөд бодит санал нь шаардлага, scope, интеграц, хугацаанаас хамаарч тодорхойлогдоно."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {priceRanges.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-[1.75rem] p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                  {item.label}
                </p>
                <p className="mt-4 font-[family:var(--font-display)] text-3xl leading-tight tracking-tight text-[var(--foreground)]">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--muted-strong)]">
                Төлбөрийн нөхцөл
              </p>
              <div className="mt-6 space-y-3">
                {paymentTerms.map((term, index) => (
                  <div
                    key={term}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.25rem] bg-white/70 p-4 ring-1 ring-black/5"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[var(--foreground)]/88">
                      {term}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--muted-strong)]">
                Дизайн болон дараагийн алхам
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
                <p>
                  UI/UX дизайн шаардлагатай бол Figma болон Figma Make ашиглан
                  тусад нь шийдэж болно. Энэ нь үндсэн хөгжүүлэлтийн үнээс тусдаа
                  тооцогдоно.
                </p>
                <p>
                  Төсөл эхлэхээс өмнө текст, материал, санал хүсэлтээ нэгтгэх
                  хариуцсан хүн болон шийдвэр гаргах эзэн тодорхой байвал
                  хугацааны эрсдэл багасна.
                </p>
                <p>
                  Холбоо барих мэдээлэл нэмэхэд бэлэн бүтэцтэй тул энэ хуудсыг
                  цааш нь шууд ашиглаад, дараа нь өөрийн сувгуудаа оруулахад
                  хангалттай.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="cta-primary" href="#workflow">
                  Нөхцөл дахин харах
                </a>
                <a className="cta-secondary" href="#projects">
                  Төслүүд рүү очих
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
