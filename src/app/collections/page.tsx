import { getListOfCollections } from "@/api/collections";
import CollectionsList from "@/ui/organisms/CollectionsList";

const CollectionsPage = async () => {
	const data = await getListOfCollections();
	const collectionsList = data.data;

	return (
		<div>
			<CollectionsList collections={collectionsList} />
		</div>
	);
};
export default CollectionsPage;
