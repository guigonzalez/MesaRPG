export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Página não encontrada</p>
        <a href="/dashboard" className="text-primary hover:underline">
          Voltar ao Dashboard
        </a>
      </div>
    </div>
  )
}