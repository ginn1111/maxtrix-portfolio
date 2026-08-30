interface TutorialLayoutProps {
  children: React.ReactNode;
}
const TutorialLayout = (props: TutorialLayoutProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default TutorialLayout;
