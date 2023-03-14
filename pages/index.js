import { baseUrl, fetchApi } from "../src/utils/fetchApi";
import {
  BannerComp,
  PropertiesForRentFlexComp,
  PropertiesForSaleFlexComp,
} from "../components/home_page";
import { useEffect, useState } from "react";

const Index= ({})=> {
  let [propertiesForSale, changePropertiesForSale] = useState();
  let [propertiesForRent, changePropertiesForRent] = useState();
  useEffect(() => {
    (async () => {
      let propertiesForSale = await getPropertyForSale();
      changePropertiesForSale(propertiesForSale);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      let propertiesForRent = await getPropertyForRent();
      changePropertiesForRent(propertiesForRent);
    })();
  }, []);
  return (
    <div>
      <BannerComp
        purpose={"Rent A Home"}
        title1={"Rental Hones for"}
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2={"and more"}
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <PropertiesForRentFlexComp propertiesForRent={propertiesForRent} />
      <BannerComp
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <PropertiesForSaleFlexComp propertiesForSale={propertiesForSale} />
    </div>
  );
}

async function getPropertyForSale() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );

  return propertyForSale?.hits;
}

async function getPropertyForRent() {
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return propertyForRent?.hits;
}


export default Index