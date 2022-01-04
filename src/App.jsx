import Home from "./views/Home/Home.jsx";
import Layout from "./views/Layout/Layout.jsx";

// 
// Install and Import react router
// Implement router switch with appropriate routes. 
// Create and import a private route component.
// Wrap appropriate components in private route component.
// 

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
