import { ThemeToggle } from "./components/theme-toggle"
import { useTheme } from "./providers/theme-provider"

function App() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Defina as imagens para os diferentes breakpoints
  const mobileBgImage = isDark ? "/bg-mobile-dark.jpg" : "/bg-mobile-light.jpg"
  const desktopBgImage = isDark
    ? "/bg-desktop-dark.jpg"
    : "/bg-desktop-light.jpg"

  return (
    <div className="w-full h-screen font-josefin text-lg bg-background">
      <div
        className={`w-full h-80 absolute bg-no-repeat bg-cover bg-fixed bg-center 
          bg-[url('${mobileBgImage}')] 
          md:bg-[url('${desktopBgImage}')]`}
      />
      <div className={`w-full h-full flex justify-center py-30 relative`}>
        <div className="w-full max-w-[500px] flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <h1 className="text-zinc-100 text-4xl font-bold tracking-[15px]">
              TODO
            </h1>
            <ThemeToggle />
          </div>
          <div className="space-y-5 text-secondary">
            <div className="bg-primary hover:text-tertiary cursor-pointer transition-all rounded-sm p-5">
              <p>Currently Typing</p>
            </div>
            <div className="bg-primary rounded-sm">
              <div className=" hover:text-tertiary cursor-pointer transition-all p-5">
                <p>Currently Typing</p>
              </div>
              <div className="hover:text-tertiary cursor-pointer transition-all p-5">
                <p>Currently Typing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
