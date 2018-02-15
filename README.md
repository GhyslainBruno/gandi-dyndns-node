[![NPM](https://nodei.co/npm/gandi-dyndns-node.png)](https://nodei.co/npm/gandi-dyndns-node/)

[![npm version](https://badge.fury.io/js/gandi-dyndns-node.svg)](https://badge.fury.io/js/gandi-dyndns-node)

# gandi-dyndns-node

This package is a very little piece of code (written in NodeJS) made just to be usefull. 

Why ? 
---

-> Because when you have some domain(s) at Gandi's and also have an IP dynamically changed you can't use a usual DynDns service.

Who does it work ? 
---

-> Will check what is your external IP address, using Gandi's service (http://me.gandi.net), check if the value at Gandi is the good one, and if not change it, quite simple. 

In order to use it you juste have to fill the config/default.json file with : 
* domain: the domain on which you want to check the IP address
* name: the name of the record you want to check (basically "@", but could be different)
* type: the type of record you want to check (basically "A", but could be different)
* api_key: your personnal API Key (which can be found in [here](https://account.gandi.net/) from the "security" section)

So basically, here is what you have to do to use it: 

```{r, engine='bash', count_lines}
npm install gandi-dyndns-node
``` 

Then fill the confifg/default.json with your personnal stuff, and then: 

```{r, engine='bash', count_lines}
node gandyndns.js
```

This code uses the [LiveDNS API](http://doc.livedns.gandi.net/) from the Gandi v5. 

For any help you can refer to the Gandi documentation. 

For any bugs, PR are welcomed. 

Hope this helps.

Pro tips: using it in a cron task can be usefull.