import Head from 'next/head';

type Props = {
  title: string;
  keyword?: string;
  desc?: string;
  children: React.ReactNode;
};

const Template: React.FC<Props> = (props: Props) => {
  const { keyword, desc, title, children } = props;

  return (
    <article>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keyword} />
        <meta name="description" content={desc} />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>{children}</main>
    </article>
  );
};

Template.defaultProps = {
  title: '',
  keyword: '',
  desc: '',
};

export default Template;
