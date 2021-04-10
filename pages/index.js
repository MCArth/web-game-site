import GenericPage from '../Components/GenericPage.js'
import LandingPage from '../Components/LandingPage.js'

export default function Home() {
  return (
    <GenericPage 
      title="Mine and Craft Games.com"
      headerIsClickable={false}
    >
      <LandingPage />
    </GenericPage>
  )
}
