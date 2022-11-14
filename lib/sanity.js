import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "v2wdb4j1",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skcdX3vZqbURrV4266GykeB7U1HuFOHX6LpASD4x53eeP8Fo324xgCt1cI2UhGjTh3LzgYhL9nEb1N32bCMsLlbH2yQTHnBQnm6otRGs1xEJauqXLhuMwU6Ri71xptIERKVp2CxvUjPN5JLrFbz9ayAs2UGirnrzxfpFDQuK8Q2l5f4UafVK",
  useCdn: false,
});
