
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Badge } from "./components/ui/badge";
import { Check, ChevronRight, FileText, Mail, MapPin, Phone, ShieldCheck, Users, Scale, Search, Award, Linkedin, Facebook, Twitter } from "lucide-react";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>{children}</section>
);
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">{children}</span>
);

export default function Website() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "training", label: "Training" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "about", label: "About" },
    { id: "opportunities", label: "Opportunities" },
    { id: "latest", label: "Latest" },
    { id: "contact", label: "Contact" },
  ];

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mereb Consulting Eth",
    url: "https://www.merebconsulting.et/",
    description: "Legal services, training, and research on human rights, transitional justice, peacebuilding, and access to justice in Ethiopia and beyond.",
    address: { "@type": "PostalAddress", addressCountry: "ET" },
    contactPoint: [{ "@type": "ContactPoint", contactType: "customer support", email: "info@merebconsulting.org", telephone: "+251900647620" }],
    sameAs: ["https://www.linkedin.com/", "https://www.facebook.com/", "https://x.com/"],
  }), []);

  const features = [
    { icon: ShieldCheck, title: "Human Rights", text: "Advisory and strategic support grounded in international and regional standards." },
    { icon: Scale, title: "Transitional Justice", text: "Policy design, reparations, and implementation support." },
    { icon: Users, title: "Peacebuilding", text: "Dialogue, reconciliation, and community resilience." },
    { icon: Search, title: "Access to Justice", text: "Strengthening legal aid, court processes, and rights awareness." },
  ];

  const services = [
    { icon: ShieldCheck, title: "Human Rights", bullets: ["Legal & policy advisory", "Capacity building", "Advocacy support"] },
    { icon: Scale, title: "Transitional Justice", bullets: ["Truth-seeking methodologies", "Reparations design", "Victim participation strategies"] },
    { icon: Users, title: "Peacebuilding", bullets: ["Dialogue facilitation", "Community reconciliation", "Conflict-sensitive programming"] },
    { icon: Search, title: "Access to Justice", bullets: ["Legal aid system strengthening", "Court user support", "Rights awareness campaigns"] },
  ];

  const trainings = [
    { title: "Human Rights for Practitioners", level: "Beginner – Advanced", outcomes: ["Standards & mechanisms", "Fact-finding basics", "Case analysis"], badge: "Open Enrollment" },
    { title: "Transitional Justice Toolkit", level: "Intermediate", outcomes: ["TJ pillars", "Reparations design", "Victim-centered approaches"], badge: "Popular" },
  ];

  const publications = [
    { title: "Reparations for CRSV in Transitional Contexts", type: "Policy Brief", year: 2025 },
    { title: "Digital Archiving Guide for CSOs", type: "Toolkit", year: 2024 },
  ];

  const faqs = [
    { q: "Do you provide direct legal representation?", a: "Yes, through strategic cases and partnerships with legal aid organizations." },
    { q: "Can trainings be customized?", a: "Absolutely, with tailored case studies and simulations." },
    { q: "Do you work outside Ethiopia?", a: "Yes, regionally and globally." },
  ];

  const teamMembers = [
    { name: "Biruk Jemal", role: "Executive Director", img: "https://via.placeholder.com/240x240.png?text=Biruk+Jemal", desc: "Expert in human rights, transitional justice, and consultancy services." },
    { name: "Rediat Hunegnaw", role: "Program Manager", img: "https://via.placeholder.com/240x240.png?text=Rediat+Hunegnaw", desc: "Experienced in managing human rights programs and initiatives." },
    { name: "Etsegenet Melkamu", role: "Project Coordinator", img: "https://via.placeholder.com/240x240.png?text=Etsegenet+Melkamu", desc: "Skilled in project management within justice and governance sectors." },
    { name: "Mikiyas Defabachew", role: "Content & Design Manager", img: "https://via.placeholder.com/240x240.png?text=Mikiyas+Defabachew", desc: "Specialist in visual communication for justice-related projects." },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-slate-50 text-slate-900">
      <head>
        <title>Mereb Consulting Eth – Your Rights. Our Fight.</title>
        <meta name="description" content="Mereb Consulting Eth provides legal services, training and research on human rights, transitional justice, peacebuilding, and access to justice." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <Container className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-400 font-bold text-slate-900">MCE</div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">Mereb Consulting Eth</p>
              <p className="text-[11px] text-slate-300">Your Rights. Our Fight.</p>
            </div>
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-slate-200 hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <Button variant="secondary" size="sm" onClick={() => setMenuOpen(!menuOpen)}>
              Menu
            </Button>
          </div>
        </Container>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800">
            <Container className="grid gap-2 py-4">
              {nav.map((n) => (
                <a key={n.id} onClick={() => setMenuOpen(false)} href={`#${n.id}`} className="text-sm text-slate-200 hover:text-white">
                  {n.label}
                </a>
              ))}
            </Container>
          </div>
        )}
      </header>

      {/* Hero */}
      <Section id="home" className="bg-slate-900 text-white">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl font-bold md:text-5xl">Your Rights. Our Fight. <span className="text-amber-400">Game On.</span></h1>
              <p className="mt-4 text-slate-300">We deliver human rights, transitional justice, peacebuilding, and access to justice solutions across Ethiopia and the region.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild><a href="#contact">Request a Proposal</a></Button>
                <Button asChild variant="secondary"><a href="#services">Explore Services</a></Button>
                <Pill>Based in Ethiopia</Pill>
                <Pill>Victim-Centered</Pill>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="border-0 bg-slate-800 text-slate-100 shadow-xl">
                <CardHeader><CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5"/> Quick Inquiry</CardTitle></CardHeader>
                <CardContent>
                  <form method="POST" action="mailto:info@merebconsulting.org?subject=Inquiry%20from%20website">
                    <div className="grid gap-3">
                      <Input name="name" placeholder="Full name" required />
                      <Input name="email" placeholder="Email" type="email" required />
                      <Input name="org" placeholder="Organization (optional)" />
                      <Textarea name="message" placeholder="How can we help?" rows={4} required />
                      <Button type="submit" className="w-full">Send</Button>
                    </div>
                  </form>
                  <p className="mt-3 text-xs text-slate-400">By submitting you agree to our privacy policy.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Features - What We Do */}
      <Section>
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">What We Do</h2>
            <p className="mt-2 text-slate-600">Practical, principled, and context-aware support.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Card key={f.title} className="rounded-2xl">
                <CardHeader><CardTitle className="flex items-center gap-2"><f.icon className="h-5 w-5"/>{f.title}</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">{f.text}</CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-white">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Services</h2>
              <p className="mt-2 text-slate-600">Focused on Mereb’s core areas.</p>
            </div>
            <Button asChild variant="outline"><a href="#contact">Request a call</a></Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Card key={s.title} className="rounded-2xl">
                <CardHeader><CardTitle className="flex items-center gap-2"><s.icon className="h-5 w-5"/>{s.title}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {s.bullets.map((b) => (<li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/> {b}</li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Training (kept) */}
      <Section id="training" className="bg-slate-50">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Training Programs</h2>
            <p className="mt-2 text-slate-600">Hands‑on, assessment‑aligned, and customizable.</p>
          </div>
          <Tabs defaultValue="catalog">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="catalog">Catalog</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
            <TabsContent value="catalog" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {trainings.map((t) => (
                  <Card key={t.title} className="rounded-2xl">
                    <CardHeader><CardTitle className="flex items-center justify-between gap-2"><span>{t.title}</span><Badge>{t.badge}</Badge></CardTitle></CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600">{t.level}</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-600">
                        {t.outcomes.map((o) => (<li key={o} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/> {o}</li>))}
                      </ul>
                      <Button className="mt-4 w-full" asChild><a href="#contact">Enroll</a></Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="custom" className="mt-6">
              <Card className="rounded-2xl"><CardContent className="pt-6 text-slate-700">
                <p>We co-design curricula with your institution. Tell us your objectives, audience, and timelines—we’ll propose a tailored course.</p>
                <Button className="mt-4" asChild><a href="#contact">Request custom training</a></Button>
              </CardContent></Card>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>

      {/* Research */}
      <Section id="research">
        <Container>
          <div className="mb-10 grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Research & Knowledge</h2>
              <p className="mt-2 text-slate-600">We combine doctrinal analysis with comparative insights and mixed methods to inform policy and practice.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><Award className="mt-0.5 h-4 w-4"/> Peer‑reviewed and practice‑oriented outputs</li>
                <li className="flex items-start gap-2"><Users className="mt-0.5 h-4 w-4"/> Government, NHRI, and CSO collaborations</li>
                <li className="flex items-start gap-2"><FileText className="mt-0.5 h-4 w-4"/> Evidence‑based policy briefs and toolkits</li>
              </ul>
            </div>
            <Card className="rounded-2xl">
              <CardHeader><CardTitle>Focus Areas</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Human Rights","Transitional Justice","Peacebuilding","Access to Justice"].map(t => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Publications (without the litigation in federal systems item) */}
      <Section id="publications" className="bg-slate-50">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Publications</h2>
            <p className="mt-2 text-slate-600">Briefs, toolkits, and reports.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {publications.map((pub) => (
              <Card key={pub.title} className="rounded-2xl">
                <CardHeader><CardTitle>{pub.title}</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FileText className="h-4 w-4"/> {pub.type} · {pub.year}
                  </div>
                  <div className="mt-4">
                    <Button variant="secondary" size="sm" className="mr-2" asChild><a href="#" aria-disabled>View</a></Button>
                    <Button size="sm" asChild><a href="#" aria-disabled>Download</a></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* About + Our Teams */}
      <Section id="about" className="bg-white">
        <Container>
          <div className="mb-10 grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">About Us</h2>
              <p className="mt-2 text-slate-700">We are an Ethiopia‑based firm led by legal and human rights experts with experience across research, litigation, and policy implementation. We work with public institutions, civil society, and international partners to advance dignity, accountability, and the rule of law.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border p-4">
                  <p className="font-medium">Who We Are — Contact Us</p>
                  <p className="mt-2 text-sm text-slate-700">Have questions? <a href="#contact" className="underline">Reach out</a> and we’ll respond promptly.</p>
                </div>
                <div className="rounded-2xl border p-4">
                  <p className="font-medium">Our Values</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/> Independence</li>
                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/> Victim‑centered justice</li>
                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/> Evidence & learning</li>
                  </ul>
                </div>
              </div>
            </div>
            <Card className="rounded-2xl">
              <CardHeader><CardTitle>Our Teams</CardTitle></CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  {teamMembers.map((m) => (
                    <div key={m.name} className="rounded-xl border p-4 text-center">
                      <img src={m.img} alt={m.name} className="mx-auto mb-3 h-28 w-28 rounded-full object-cover" />
                      <p className="font-semibold">{m.name}</p>
                      <p className="text-xs text-slate-500">{m.role}</p>
                      <p className="mt-2 text-sm text-slate-700">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Opportunities */}
      <Section id="opportunities" className="bg-slate-50">
        <Container>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Opportunities</h2>
            <p className="mt-2 text-slate-600">Jobs, consultancies, and tenders.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl"><CardHeader><CardTitle>— No open roles right now</CardTitle></CardHeader><CardContent className="text-sm text-slate-700">Check back soon or follow our pages.</CardContent></Card>
            <Card className="rounded-2xl"><CardHeader><CardTitle>Vendor Registration</CardTitle></CardHeader><CardContent className="text-sm text-slate-700">Suppliers can email their profiles to <a className="underline" href="mailto:info@merebconsulting.org">info@merebconsulting.org</a>.</CardContent></Card>
          </div>
        </Container>
      </Section>

      {/* Latest */}
      <Section id="latest" className="bg-white">
        <Container>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Latest</h2>
            <p className="mt-2 text-slate-600">Announcements and event updates.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl"><CardHeader><CardTitle>Announcement</CardTitle></CardHeader><CardContent className="text-sm text-slate-700">No announcements yet.</CardContent></Card>
            <Card className="rounded-2xl"><CardHeader><CardTitle>Event Updates</CardTitle></CardHeader><CardContent className="text-sm text-slate-700">Upcoming events will be listed here.</CardContent></Card>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-white">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Contact</h2>
            <p className="mt-2 text-slate-600">We typically reply within 2–3 business days.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="rounded-2xl">
              <CardHeader><CardTitle>Send a Message</CardTitle></CardHeader>
              <CardContent>
                <form method="POST" action="mailto:info@merebconsulting.org?subject=Contact%20from%20website">
                  <div className="grid gap-3">
                    <Input name="name" placeholder="Your name" required />
                    <Input name="email" placeholder="Email" type="email" required />
                    <Input name="subject" placeholder="Subject" />
                    <Textarea name="message" placeholder="Tell us about your needs" rows={6} required />
                    <Button type="submit">Send</Button>
                  </div>
                </form>
                <p className="mt-3 text-xs text-slate-500">For RFPs, you can also email <a href="mailto:info@merebconsulting.org" className="underline">info@merebconsulting.org</a>.</p>
              </CardContent>
            </Card>

            <div className="grid content-start gap-6">
              <div className="rounded-2xl border p-6">
                <p className="font-medium">Contact Details</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@merebconsulting.org</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> +251900647620</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Bambis, Addis Ababa, Ethiopia</li>
                </ul>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <a href="#" className="inline-flex items-center gap-1 underline"><Linkedin className="h-4 w-4"/> LinkedIn</a>
                  <a href="#" className="inline-flex items-center gap-1 underline"><Facebook className="h-4 w-4"/> Facebook</a>
                  <a href="#" className="inline-flex items-center gap-1 underline"><Twitter className="h-4 w-4"/> X</a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border">
                <iframe
                  title="Mereb Consulting Location - Bambis, Addis Ababa"
                  src="https://www.google.com/maps?q=Bambis,+Addis+Ababa&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-slate-900 text-slate-300">
        <Container className="grid gap-8 py-10 md:grid-cols-4">
          <div>
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-amber-400 font-bold text-slate-900">MCE</div>
            <p className="text-sm">Mereb Consulting Eth. Focused on human rights, transitional justice, peacebuilding, and access to justice.</p>
          </div>
          <div>
            <p className="mb-2 font-medium text-white">Explore</p>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (<li key={`f-${n.id}`}><a href={`#${n.id}`} className="hover:underline">{n.label}</a></li>))}
            </ul>
          </div>
          <div>
            <p className="mb-2 font-medium text-white">Resources</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#publications" className="hover:underline">Publications</a></li>
              <li><a href="#training" className="hover:underline">Training Catalog</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-medium text-white">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#contact" className="inline-flex items-center gap-1 hover:underline"><Mail className="h-4 w-4"/> Contact</a></li>
            </ul>
          </div>
        </Container>
        <div className="border-t border-slate-800">
          <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 md:flex-row">
            <span>© {new Date().getFullYear()} Mereb Consulting Eth. All rights reserved.</span>
            <span className="inline-flex items-center gap-2">Built with Tailwind · Accessible</span>
          </Container>
        </div>
      </footer>
    </div>
  );
}
