import React from 'react' 
import './Home.css'
function Home()
{
    return(
        <>
        <div className='bg-image'>
          <h1 className='title'>Organic Farming</h1>
           <h2 className='title1'>Introduction</h2>
           <p>Organic farming is a production system which avoids or largely excludes the use of synthetically compounded fertilizers, pesticides, growth regulators, genetically modified organisms and livestock food additives</p>
           <p>Organic agricultural methods are internationally regulated and legally enforced by many nations, based in large part on the standards set by the International Federation of Organic Agriculture Movements (IFOAM), an international umbrella organization for organic farming organizations established in 1972.[7] Organic agriculture can be defined as "an integrated farming system that strives for sustainability, the enhancement of soil fertility and biological diversity while, with rare exceptions, prohibiting synthetic pesticides, antibiotics, synthetic fertilizers, genetically modified organisms, and growth hormones</p>
           <p>Organic farming can be beneficial on biodiversity and environmental protection at local level. However, because organic farming has lower yields compared to conventional farming, additional agricultural land is needed elsewhere in the world, which means that natural land has to be converted into agricultural land. This can cause loss of biodiversity and negative climate effects that outweigh the local environmental gains achieved.</p>
           <p>Agriculture was practiced for thousands of years without the use of artificial chemicals. Artificial fertilizers were first developed during the mid-19th century. These early fertilizers were cheap, powerful, and easy to transport in bulk. Similar advances occurred in chemical pesticides in the 1940s, leading to the decade being referred to as the 'pesticide era'.[16] These new agricultural techniques, while beneficial in the short-term, had serious longer-term side-effects such as soil compaction, erosion, and declines in overall soil fertility, along with health concerns about toxic chemicals entering the food supply.[17]: 10  In the late 1800s and early 1900s, soil biology scientists began to seek ways to remedy these side effects while still maintaining higher production.</p>
        </div>
        <div className='bg-image2'>
          <h2 className='title1'>Types of Organic Farming</h2>
          <p>There are two types of organic farming- pure organic farming and integrated organic farming. These farming processes have their advantages and disadvantages. Some farmers prefer to use a refined farming process, whereas some opt for an integrated farming process.</p>
          <h3 className='head'>Pure Organic Farming</h3>
          <p>As the name of this farming process suggests, it uses natural ways for cultivation. Pure organic farming completely avoids inorganic chemicals that may harm the soil, crop, and people who consume it.In this process, farmers use organic fertilizers and bio-pesticides derived from natural sources—for example- bone meal, blood meal, etc.</p>
          <h3 className='head'>Integrated Organic Farming</h3>
          <p>The integrated farming process consists of integrating pest management and nutrients management to achieve ecological requirements and fulfill the economic demands also.</p>
        </div>
        <div className='bg-image3'>
           <h2 className='title1'>Advantages of Organic Farming</h2>
           <ol>
             <li className='adg'>
                <p>It helps to maintain environment health by reducing the level of pollution.</p>
             </li>
             <li className='adg'>
                <p>It reduces human and animal health hazards by reducing the level of residues in the product</p>
             </li >
             <li className='adg'>
                <p>It helps in keeping agricultural production at a sustainable level.</p>
             </li>
             <li className='adg'>
                <p>It reduces the cost of agricultural production and also improves the soil health.</p>
             </li >
             <li className='adg'>
                <p>It ensures optimum utilization of natural resources for short-term benefit and helps in conserving them for future generation.</p>
             </li>
             <li className='adg'>
                <p>It not only saves energy for both animal and machine, but also reduces risk of crop failure.</p>
             </li>
             <li className='adg'>
                <p>It improves the soil physical properties such as granulation, good tilth, good aeration, easy root penetration and improves water-holding capacity and reduces erosion.</p>
             </li>
             <li className='adg'>
                <p>It improves the soil’s chemical properties such as supply and retention of soil nutrients, reduces nutrient loss into water bodies and environment and promotes favourable chemical reactions.
                 </p>
             </li>
           </ol>
        </div>
        <div className='bg-image4'>
        <h2 className='title1'>Limtation</h2>
        <ol>
             <li className='adg'>
              Organic manure is not abundantly available and on plant nutrient basis it may be more expensive than chemical fertilizers if organic inputs are purchased.
             </li>
             <li>
             Production in organic farming declines especially during first few years, so the farmer should be given premium prices for organic produce.
             </li>
             <li>
             The guidelines  for organic production, processing, transportation and certification etc are beyond the understanding of ordinary Indian farmer
             </li>
             <li>
             Marketing of organic produce is also not properly streamlined. There are a number of farms in India which have either never been chemically managed / cultivated or have converted back to organic farming because of farmers’ beliefs or purely for reason of economics.
             </li>
        </ol>
        </div>
        <div className='bg-image5'>
         <h2 className='title'>organic farming in uttrakhand</h2>
         <p>The trend of organic farming is on a boom in the market. There is a consistent rise in consumers' demand for organic products globally in the last 6 years. People nowadays prefer to consume organic products more often, due to their reliability of not being contaminated with chemicals and helping the environment too. Many countries all over the world are switching to organic agriculture. Uttarakhand is among the several states in India that are taking steps forward in promoting organic farming. With its clean intentions of developing organic farming, Uttarakhand has announced plans to do so in the coming years</p>
         <p>Uttarakhand has officially certified 23% of its total land for organic agriculture but the government is determined to increase the certified percentage of land for organic farming up to 31% in the state by the end of 2021</p>
         <p> In 2019, keeping in view the prospects and scope of farming, the Uttarakhand government has approved India’s first organic agriculture act. The act states the penalties applicable if farmers used pesticides or any kind of banned fertilizer for their crops.</p>
         <p> It is considered admirable that about 40% of the organic farming done in India is done by Uttarakhand and the state sees a future of being the 'Fully Organic state’ in the next 5 years.</p>
         <p>The Uttarakhand government is all set to give a boost to the organic market with the help of Self-Help Groups(SHGs) that would be under government control to make the farmers aware of the importance of organic farming and help them enhance their production scale.</p>
        </div>
        </>
    );
}
export default Home;