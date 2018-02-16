[![NPM](https://nodei.co/npm/gandi-dyndns-node.png)](https://nodei.co/npm/gandi-dyndns-node/)

[![npm version](https://badge.fury.io/js/gandi-dyndns-node.svg)](https://badge.fury.io/js/gandi-dyndns-node)

# gandi-dyndns-node

This package is a very little piece of code (written in NodeJS) made just to be usefull. 

Why ? 
---

Because when you have some domain(s) at Gandi's and also have an IP dynamically changed you can't use a usual DynDns service.

How does it work ? 
---

Will check what is your external IP address, using Gandi's service (http://me.gandi.net), check if the value at Gandi is the good one, and if not change it, quite simple. 

In order to use it you just have to add options to the "update" command: 
* --domain-name: the domain on which you want to check the IP address
* --name: the name of the record you want to check (basically "@", but could be different)
* --type: the type of record you want to check (basically "A", but could be different)
* --api-key: your personnal API Key (which can be found in [here](https://account.gandi.net/) from the "security" section)

So basically, here is what you have to do to use it: 

```{r, engine='bash', count_lines}
npm install -g gandi-dyndns-node
``` 

```{r, engine='bash', count_lines}
gandi --domain-name YOUR_DOMAIN_NAME --name NAME_OF_RECORD --type TYPE_OF_RECORD --api-key YOUR_API_KEY update
```

This code uses the [LiveDNS API](http://doc.livedns.gandi.net/) from the Gandi v5. 

For any help you can refer to the Gandi documentation. 

For any bugs, PR are welcomed. 

Hope this helps.

Pro tips: using it in a [cron task](https://www.google.fr/search?q=add+a+cron+task&rlz=1C5CHFA_enFR705FR709&oq=add+a+cron+task&aqs=chrome..69i57.3798j0j7&sourceid=chrome&ie=UTF-8) can be usefull.