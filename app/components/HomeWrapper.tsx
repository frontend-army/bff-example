export default function HomeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={`autocomplete dark mb-2`}>
        <div className="relative">{children}</div>
      </div>
    </main>
  );
}
