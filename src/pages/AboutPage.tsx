
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { useSEO } from "@/lib/seo";

const AboutPage = () => {
  useSEO("من نحن - Agentic AI", "تعرف على الفريق وراء الثورة القادمة في الذكاء الاصطناعي");

  return (
    <div className="py-20">
      <Section>
        <Container className="max-w-3xl text-right">
          <h1 className="text-4xl font-bold mb-8">مهمتنا: تمكين الإنسان بالذكاء الاصطناعي</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              تأسست Agentic AI في عام 2024 بهدف واحد: كسر الحواجز بين التقنية المتقدمة والتشغيل المهني اليومي. نحن نؤمن أن المستقبل لا يكمن في استبدال البشر، بل في تعزيز قدراتهم.
            </p>
            <h2 className="text-2xl font-bold mb-4">قيمنا الجوهرية</h2>
            <ul className="space-y-4 mb-8">
              <li className="bg-muted p-4 rounded-lg">
                <strong>الشفافية:</strong> نحن نوضح دائماً كيف يتم اتخاذ القرارات من قبل وكلائنا.
              </li>
              <li className="bg-muted p-4 rounded-lg">
                <strong>الخصوصية أولاً:</strong> بياناتك هي ملكك، ونحن مجرد معبر لتشغيلها.
              </li>
              <li className="bg-muted p-4 rounded-lg">
                <strong>الابتكار المستمر:</strong> نحدّث نماذجنا أسبوعياً لنضمن لك أفضل أداء.
              </li>
            </ul>
            <p className="text-muted-foreground">
              فريقنا يتكون من مهندسون ومبدعون من كافة أنحاء العالم، يعملون جنباً إلى جنب لبناء منصة تكون قادرة على تغيير حياة الملايين.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutPage;
