import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useTopicList(page) {
  const [load, setload] = useState(true);
  const [error, seterror] = useState(false);
  const [topics, settopics] = useState([]);
  const [hasmore, sethasmore] = useState(true);

  useEffect(() => {
    async function fetchTopics() {
      //database related works
      const db = getDatabase();
      const topicsRef = ref(db, "topics");

      const topicQuery = query(
        topicsRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );
      try {
        seterror(false);
        setload(true);

        //request firebase databasa
        const snapshot = await get(topicQuery);
        setload(false);
        // if (snapshot.exists()) {
        //   settopics((prevtopics) => {
        //     return [...prevtopics, ...Object.values(snapshot.val())];
        //   });
        // } else {
        // }
        if (snapshot.exists()) {
          settopics(Object.values(snapshot.val()));
        } else {
          sethasmore(false);
        }
      } catch (error) {
        console.log(error);
        seterror(true);
        setload(false);
      }
    }
    fetchTopics();
    // setTimeout(() => {

    // }, 2000);
  }, [page]);
  return {
    load,
    error,
    topics,
    hasmore,
  };
}
