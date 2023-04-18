import styles from '/styles/Home.module.css';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className={styles.headerContainer}>
        <div className="">
          <nav className="ml-4 pl-6">
          <img src='/AskEDGAR.png' alt='askedgar' className={styles.AskEDGAR} />
          </nav>
        </div>
      </header>
      <div className="container">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
