const parseEnv = () => {
   const env_obj = process.env;
   const rss_vars = Object.entries(env_obj).reduce((acc, [key, value]) => {

     if(key.startsWith('RSS_')) {
        return [...acc, `${key}=${value}` ];
     }

     return acc;
   }, []);

   console.log(rss_vars.join('; '));
};

parseEnv();