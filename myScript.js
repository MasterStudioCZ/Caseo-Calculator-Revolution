var fx7000gsprite = './mods/Caseo Calculator Revolution/sprites/CaseoFx-7000g.png';

GDT.addPlatform({
	id : 'rx-7000g',
	name : 'Caseo rx-7000G',
	company : 'Caseo Computer',
	startAmount : 0.03,
		marketKeyPoints:[
		{date:"3/6/4",amount:0.019},
		{date:"3/9/1",amount:0.025},
		{date:"4/3/4",amount:0.03}
	],
	unitsSold : 0.03, // cca 200,000 (1,000,000, but only 20% play games) units. Multiplier: 0.15
	licencePrize : 0,
	published : '3/3/1', // Mid 1985
	platformRetireDate : '4/12/2', // 1988
	developmentCosts : 500,
	genreWeightings : [0.6, 0.8, 0.9, 0.6, 0.7, 1],
	audienceWeightings : [1, 1, 0.8],
	techLevel : 1,
	iconUri : fx7000gsprite,
	events : [{
			id : 'fx7000g-1',
			date : '3/3/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Caseo Computer, a relatively well-known company in the electronics industry, released a new pocket calculator today. It is called Caseo rx-7000G and it has the potential to completely revolutionize the market.{n}The rx-7000g isn't just another scientific calculator - it is a 'graphing' calculator, a calculator capable of solving equations and plotting their graphs. No other device on the market has such a capability - it is first of its kind.{n} It is also programmable, so aside from its immense potential in the education and science sector, several people have already shown interest in developing various scripts and even video games for it.{n}Video games were already present on calculators, but they were only pre-preprogrammed by manufacturers. Caseo rx-7000g could possibly create an entirely new niche in the gaming industry.{n}That said, students are definitely going to be thrilled.",
					image : fx7000gsprite
				});
			}
		}
	]
});

// add code to decrease price of one game unit for calculator to 1 and multiply fans gained by 2 - 5