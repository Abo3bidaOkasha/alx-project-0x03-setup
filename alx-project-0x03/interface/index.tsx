export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageRouteProps {
  pageRoute: string;
}
const Home = () => {
  return (
    <div>
      <h1> Welcome to Splash App </h1>
    </div>
  )
}

export default Home;
