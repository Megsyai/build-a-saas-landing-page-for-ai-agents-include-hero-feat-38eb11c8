
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeImage } from "@/components/SafeImage";
import { aiImage } from "@/lib/deapi";
import { img } from "@/lib/img";
import { useSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Globe, 
  MessageSquare, 
  Workflow,
  Star
} from "lucide-react";

const LandingPage = () => {
  useSEO("Agentic AI - منصة وكلاء الذكاء الاصطناعي المستقبلية", "قم بتمكين عملك باستخدام وكلاء ذكاء اصطناعي ذاتيي الحركة");
  const [heroImg, setHeroImg] = useState(img("ai-dashboard", 1200, 800));

  useEffect(() => {
    aiImage("sleek futuristic AI dashboard interface, high tech, glowing blue accents", {w:1200, h:800}).then(setHeroImg);
  }, []);

  const features = [
    {
      title: "أتمتة ذكية",
      desc: "وكلاء يتعلمون من سير عملك وينفذون المهام المعقدة بدقة مذهلة.",
      icon: <Workflow className="h-6 w-6 text-primary" />
    },
    {
      title: "سرعة فائقة",
      desc: "تقليل وقت الاستجابة بنسبة 80% بفضل بنية تحتية موزعة عالمياً.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "أمان مؤسسي",
      desc: "تشفير البيانات من طرف إلى طرف لضمان خصوصية معلوماتك الحساسة.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />
    }
  ];

  const testimonials = [
    {
      name: "أحمد الفارسي",
      role: "مدير تقني في TechFlow",
      text: "غيرت Agentic AI الطريقة التي ندير بها دعم العملاء بالكامل. الوكلاء أذكياء جداً!",
      avatar: "https://i.pravatar.cc/150?u=ahmed"
    },
    {
      name: "ليلى حسن",
      role: "رئيسة التسويق في BrightScale",
      text: "سرعة التنفيذ كانت مذهلة. استطعنا إطلاق حملة كاملة خلال ساعات باستخدام المساعدين.",
      avatar: "https://i.pravatar.cc/150?u=laila"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section className="relative pt-20 pb-32 lg:pt-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-right flex flex-col items-end"
            >
              <Badge variant="secondary" className="mb-4">إصدار 2.0 متاح الآن</Badge>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
                مستقبل العمل هو <span className="text-primary">وكلاء ذكاء اصطناعي</span> يعملون عنك
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                أول منصة متكاملة لبناء، إدارة، وتطوير وكلاء الذكاء الاصطناعي القادرين على اتخاذ قرارات مستقلة لتنمية تجارتك.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="px-8">جربه الآن مجاناً</Button>
                <Button size="lg" variant="outline">مشاهدة العرض</Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border"
            >
              <SafeImage src={heroImg} className="object-cover w-full h-full" fallbackSeed="tech" />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <div className="border-y bg-muted/30">
        <Container className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-muted-foreground">مهمة منجزة</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50k+</div>
              <div className="text-muted-foreground">مستخدم فعال</div>
            </div>
            <div>
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-muted-foreground">وقت تشغيل</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-muted-foreground">تكامل برمجي</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Features Grid */}
      <Section className="bg-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">قوة الذكاء الاصطناعي بين يديك</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">نحن لا نقدم مجرد شات بوت، بل نقدم زملاء عمل رقميين يفهمون طبيعة عملك.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Card key={i} className="hover:shadow-lg transition-all group border-none bg-muted/50">
                <CardContent className="pt-8">
                  <div className="mb-4 bg-background p-3 rounded-lg w-fit group-hover:scale-110 transition-transform shadow-sm">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-right">{f.title}</h3>
                  <p className="text-muted-foreground text-right leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-muted/10">
        <Container>
          <div className="text-center mb-12 font-bold text-2xl">ماذا يقول عملاؤنا</div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-8">
                <div className="flex flex-row-reverse items-center gap-4 mb-4">
                  <img src={t.avatar} className="h-12 w-12 rounded-full border-2 border-primary/20" alt={t.name} />
                  <div className="text-right">
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="flex justify-end gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-right text-lg italic text-muted-foreground">"{t.text}"</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">جاهز لبدء عصر الأتمتة؟</h2>
              <p className="text-xl mb-8 opacity-90 max-w-xl mx-auto">انضم إلى آلاف الشركات التي بدأت في توسيع آفاقها باستخدام مساعدي الذكاء الاصطناعي.</p>
              <Button size="lg" variant="secondary" className="px-10 py-6 text-lg">سجل مجاناً اليوم</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default LandingPage;
