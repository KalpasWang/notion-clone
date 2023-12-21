import { Navbar } from "./_components/navbar";

const HeroLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-background">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default HeroLayout;
