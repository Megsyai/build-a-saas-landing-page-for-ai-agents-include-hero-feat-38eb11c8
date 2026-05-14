
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useSEO } from "@/lib/seo";

const PricingPage = () => {
  useSEO("خطط الأسعار - Agentic AI", "اختر الخطة المناسبة لنمو عملك");

  const plans = [
    {
      name: "الأساسية",
      price: "0",
      features: ["وكيل واحد فعال", "500 رصيد شهرياً", "دعم عبر المجتمع", "تكاملات محدودة"],
      cta: "ابدأ مجاناً",
      popular: false
    },
    {
      name: "الاحترافية",
      price: "49",
      features: ["5 وكلاء فعالين", "رصيد غير محدود", "دعم فني 24/7", "تكاملات API كاملة", "تحليلات متقدمة"],
      cta: "ابدأ الفترة التجريبية",
      popular: true
    },
    {
      name: "المؤسسات",
      price: "خصص",
      features: ["وكلاء غير محدودين", "بنية تحتية خاصة", "مدير حساب مخصص", "دعم SLA بريميوم", "تدريب مخصص للنماذج"],
      cta: "تواصل معنا",
      popular: false
    }
  ];

  return (
    <Section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">خطط شفافة لكل مرحلة</h1>
          <p className="text-muted-foreground">اختر الخطة التي تناسب احتياجاتك البرمجية والتشغيلية.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <Card key={i} className={`relative flex flex-col ${p.popular ? 'border-primary shadow-xl scale-105 z-10' : ''}`}>
              {p.popular && <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">الأكثر طلباً</div>}
              <CardHeader className="text-center pb-8 border-b">
                <div className="text-lg font-bold mb-2">{p.name}</div>
                <div className="flex items-center justify-center">
                  <span className="text-muted-foreground ml-1">دلار/شهر</span>
                  <span className="text-4xl font-extrabold">{p.price}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-8 flex-grow">
                <ul className="space-y-4">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex flex-row-reverse items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="text-right text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={p.popular ? "default" : "outline"}>{p.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PricingPage;
