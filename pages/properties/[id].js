import { baseUrl, fetchApi } from "../../src/utils/fetchApi";
import PropertyDetailsComp from "../../components/prop_id_page";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PropertyDetails = ({ }) => {
  let [propertyDetails, changePropertyDetails] = useState(null);
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    if (!id) {
      return
    }
    (async () => {
      let propertyDetails = await getPropertyData(id);
      changePropertyDetails(propertyDetails);
    })();
  }, [id]);
if (!propertyDetails) {
  return <></>
}
  return <PropertyDetailsComp propertyDetails={propertyDetails} />;
};

export default PropertyDetails;

 async function getPropertyData(id) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return data;
}
