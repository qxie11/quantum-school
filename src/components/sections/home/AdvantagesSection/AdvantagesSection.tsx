import { Container } from "@shared/ui";
import { Section, Collapse } from "@components/partials";
import ICollapse from "@models/ICollapse";

const ADVANTAGES_ITEMS: ICollapse[] = [
  {
    key: "1",
    header: "🤝🏻 Команда",
    children: <p>{123}</p>,
  },
  {
    key: "2",
    header: "⚙️ Система обучения",
    children: <p>{123}</p>,
  },
  {
    key: "3",
    header: "📝 Гарантии",
    children: <p>{123}</p>,
  },
];

const AdvantagesSection = () => {
  return (
    <Section>
      <Container>
        <Collapse items={ADVANTAGES_ITEMS} accordion></Collapse>
      </Container>
    </Section>
  );
};

export default AdvantagesSection;
