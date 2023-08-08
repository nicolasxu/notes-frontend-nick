// https://github.com/mattpocock/zod-fetch
import { z } from "zod";
import { createZodFetcher } from "zod-fetch";
import axios from "axios";

const fetchWithZod = createZodFetcher(axios.get);
// const fetchWithZod = createZodFetcher();// use default fetcher

fetchWithZod(
  z.object({
    data: z.object({
      name: z.string(),
    }),
  }),
  "/user",
  {
    params: {
      id: 12345,
    },
  },
).then((res) => {
  console.log(res);
  //          ^? { data: { name: string } }
});

