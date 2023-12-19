import Carousel from "../Caraousel/Caraousel";
import FilterComponent from "../FilterComponent/FilterComponent";
import PopulerSectionComponents from "../PopulerSectionComponents/PopulerSectionComponents";
import "./MainContentStyle.css"


function MainContent(){
    return(
        <>
        <div className="overflow-hidden main-content-container">
        <Carousel/>
        <FilterComponent/>
        <PopulerSectionComponents/>
        </div>
        </>
    )
}

export default MainContent;