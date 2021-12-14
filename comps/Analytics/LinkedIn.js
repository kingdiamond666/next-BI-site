import {useEffect} from 'react';
export default function LinkedIn () {
useEffect(() => {
    let _linkedin_partner_id = process.env.LINKED_IN_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    {(function(l) {
        if(!l){
          window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]
        }
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);
      })(window.lintrk)}
})
    return(

    <noscript>
    <img height="1" width="1" style={{display:"none"}} alt="" src={`https://px.ads.linkedin.com/collect/?pid=${process.env.LINKED_IN_ID}&fmt=gif`} />
    </noscript>
    )
}