import { baseUrl, fetchApi } from "../../../utils/fetchApi";
import PropertyDetailsComp from "@/components/prop_id_page";

const PropertyDetails =async ({ params:{id} }) => {
 let propertyDetails= await getPropertyData(id)
  return(
  <PropertyDetailsComp propertyDetails={propertyDetails} />
)};

export default PropertyDetails;

export async function getPropertyData(id) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return data;
}
