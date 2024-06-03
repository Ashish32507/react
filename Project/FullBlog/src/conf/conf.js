const conf = {
  appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWITE_PROJECT_ID),
  appwriteDataBaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
