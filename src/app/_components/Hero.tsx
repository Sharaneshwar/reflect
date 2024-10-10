import { Button } from "@/components/ui/button"
import { auth, signIn } from "@/auth"

export default async function Hero() {

  const session = await auth()

  return (
    <div className=" bg-background flex flex-col items-center mt-20 p-4">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Insights we Reflect
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          This is where you can manage all your important tasks, view analytics, and stay on top of your projects. Get started now to unlock the full potential of our platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {session?.user ? <Button> Go to Dashboard</Button> : <SignInButton />}
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export function SignInButton() {
  return (
    <form action={async () => {
      "use server"
      await signIn()
    }}>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" >Get Started</Button>
      </div>
    </form>
  )
}