import { Layout  } from "antd";
import Sidebar from "./layout/Sidebar";
import MyHeader from "./layout/MyHeader";
import MyContent from "./layout/MyContent";

const Home = () => {
    // const [loading, setLoading]=useState(false)
    //   const handleDark=()=>{
    //                let darkEl=document.getElementById("container")
    //         darkEl.classList.toggle('dark-mode');
    //         setLoading(true)
    
     
      

 
  return (
      
  
    <Layout>
   <Sidebar></Sidebar>
      <Layout  >
       <MyHeader/>
       <Layout style={{padding:24}}>
      <MyContent/>
       </Layout>
      </Layout  >
    </Layout>
  );
};


    

  

export default Home