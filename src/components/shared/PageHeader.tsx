interface Props {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: Props) => (
  <section className="page-header">
    <div className="container">
      <h1 className="title-page max-w-3xl">{title}</h1>
      <p className="lede mt-6">{subtitle}</p>
    </div>
  </section>
);

export default PageHeader;
