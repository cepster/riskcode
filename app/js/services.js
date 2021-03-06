'use strict';

/* Services */

var services = angular.module('myApp.services',[]);
services.value('version', '0.1');
services.factory('DataService', function(){

    var criteria = {
        132:'>5% wt loss in 1st trimester, inadequate wt gain 2nd and 3rd (low BMI: <#4/mo, normal/high BMI: 2#/mo, BMI>29: <1#/mo)',
        135:'Growth deviation of 2 channels and/or inadequate weight gain\nBirth to 1 month: 18 g/day, 4.5 oz/wk, 19 oz/month\nAge in months at end Weight gain per 6 month:\n6 months ≤ 7 pounds\n9 months ≤ 5 pounds\n12 months ≤ 3 pounds\n18-60 months ≤ 1 pounds'
    };

	return{
		getCategories:[
			{id:1, name:'Anthropometric'},
			{id:2, name:'Biochemical'},
            {id:3, name:'Clinical/Health/Medical'},
			{id:4, name:'Dietary'},
			{id:5, name:'Other Risks'}
		],
		getRisks:[
			{code:101, name:'Underweight (Women)',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/101.pdf',
                       frequencyCrit:[
                           {crit:'Prepregnancy BMI <19.8', frequency:'Monthly'}
                       ],
                       riskCat:'PG',
                       selected:false},
			{code:103, name:'Underweight or At Risk of Becoming Underweight (Infants and Children)',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/103.pdf',
                       frequencyCrit:[
                           {crit:'Wt/Length <5% (except newborn and children being follwed by MD)', frequency:'Monthly'},
                           {crit:'Growth deviation of 2 channels and/or inadequate weight gain', frequency:'Monthly'}
                       ],
                       riskCat:'I,C',
                       selected:false},
			{code:111, name:'Overweight (Women)',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/111mn.pdf',
                       selected:false},
			{code:113, name:'Overweight (Children 2-5 Years of Age)',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/113.pdf',
                       riskCat:'C',
                       selected:false},
			{code:114, name:'At Risk of Becoming Overweight (Infants and Children)',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/114.pdf',
                       selected:false},
			{code:115, name:'High Weight-for-Length (Infants & Children < 24 Months of Age)',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/115.pdf',
                       riskCat:'I,C',
                       selected:false},
			{code:121, name:'Short Stature or At Risk of Short Stature (Infants and Children)',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/121.pdf',
                       frequencyCrit:[
                           {crit:'Ht/Age <5th percentile with no medical reason for short stature (except newborn)', frequency:'Monthly'}
                       ],
                       selected:false},
			{code:131, name:'Low Maternal Weight Gain',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/131mn.pdf',
                       riskCat:'PG',
                       selected:false},
			{code:132, name:'Maternal Weight Loss During Pregnancy',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/132.pdf',
                       frequencyCrit:[
                           {crit:'>5% wt loss in 1st trimester', frequency:'Monthly'},
                           {crit:'Inadequate wt gain 2nd and 3rd (low BMI: <#4/mo, normal/high BMI: 2#/mo, BMI>29: <1#/mo)', frequency:'Monthly'}
                       ],
                       riskCat:'PG',
                       selected:false},
			{code:133, name:'High Maternal Weight Gain',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/133mn.pdf',
                       frequencyCrit:[
                           {crit:'High Maternal Weight Gain', frequency:'Monthly, bimonthly, or trimonthly'}
                       ],
                       riskCat:'PG',
                       selected:false},
			{code:134, name:'Failure to Thrive',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/134.pdf',
                       riskCat:'I,C',
                       selected:false},
			{code:135, name:'Inadequate Growth',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/135.pdf',
                       frequencyCrit:[
                           {crit:'Growth Deviation of 2 channels and/or inadequate weight gain', frequency:'Monthly'},
                           {crit:'Birth to 1 month: 18 g/day, 4.5 oz/wk, 19 oz/month', frequency:'Monthly'},
                           {crit:'Age in months at end Weight gain per 6 months:\n6 months ≤ 7 pounds\n9 months ≤ 5 pounds\n12 months ≤ 3 pounds\n18-60 months ≤ 1 pounds', frequency:'Monthly'}
                       ],
                       riskCat:'I,C',
                       selected:false},
			{code:141, name:'Low Birth Weight',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/141.pdf',
                       selected:false},
			{code:142, name:'Prematurity',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/142.pdf',
                       selected:false},
			{code:151, name:'Small for Gestational Age',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/151.pdf',
                       selected:false},
			{code:152, name:'Low Head Circumference',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/152.pdf',
                       selected:false},
			{code:153, name:'Large for Gestational Age',
                       category:1,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/153.pdf',
                       selected:false},
			

			{code:201, name:'Low Hematocrit/Low Hemoglobin',
                       category:2,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/201.pdf',
                       frequencyCrit:[
                           {crit:'Infants and Children with Hgb < 10.1', frequency:'Monthly'},
                           {crit:'Pregnant and Postpartum Women with Hgb < 10.1', frequency:'Bimonthly'},
                           {crit:'Hemolytic Anemia (sickle cell or thalassemia) not being followed by MD', frequency:'Monthly'}
                       ],
                       riskCat:'PG,BF,PP,I,C',
                       selected:false},
			{code:211, name:'Elevated Blood Lead Levels',
                       category:2,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/211.pdf',
                       riskCat:'PG, BF, I, C',
                       selected:false},

			{code:301, name:'Hyperemesis Gravidarum',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/301mn.pdf',
                       riskCat:'PG',
                       selected:false},
			{code:302, name:'Gestational Diabetes',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/302mn.pdf',
                       frequencyCrit:[
                           {crit:'If not being followed by MD', frequency:'Monthly'}
                       ],
                       riskCat:'PG',
                       selected:false},
			{code:303, name:'History of Gestational Diabetes',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/303mn.pdf',
                       selected:false},
			{code:304, name:'History of Preeclampsia',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/304mn.pdf',
                       selected:false},
			{code:311, name:'History of Preterm Delivery',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/311.pdf',
                       selected:false},
			{code:312, name:'History of Low Birth Weight',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/312mn.pdf',
                       selected:false},
			{code:321, name:'History of Spontaneous Abortion, Fetal or Neonatal Loss',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/321.pdf',
                       selected:false},
			{code:331, name:'Pregnancy at a Young Age',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/331mn.pdf',
                       frequencyCrit:[
                           {crit:'≤ 17 years at conception, inappropriate parenting', frequency:'Monthly'}
                       ],
                       riskCat:'PG,BF',
                       selected:false},
			{code:332, name:'Closely Spaced Pregnancies',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/332.pdf',
                       selected:false},
			{code:333, name:'High Parity and Young Age',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/333mn.pdf',
                       selected:false},
			{code:334, name:'Lack of Adequate Prenatal Care',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/334mn.pdf',
                       selected:false},
			{code:335, name:'Multifetal Gestation',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/335mn.pdf',
                       riskCat:'PG',
                       selected:false},
			{code:336, name:'Fetal Growth Restriction',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/336mn.pdf',
                       selected:false},
			{code:337, name:'History of Birth of a Large for Gestational Age Infant',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/337.pdf',
                       selected:false},
			{code:338, name:'Pregnant Woman Currently Breastfeeding',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/338mn.pdf',
                       riskCat:'PG',
                       selected:false},
			{code:339, name:'History of Birth with Nutrition Related Congenital or Birth Defect',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/339mn.pdf',
                       selected:false},
			{code:341, name:'Nutrient Deficiency Diseases',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/341mn.pdf',
                       riskCat:'PG, BF, I, C',
                       selected:false},
			{code:342, name:'Gastro-Intestinal Disorders',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/342.pdf',
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:343, name:'Diabetes Mellitus',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/343mn.pdf',
                       frequencyCrit:[
                           {crit:'If not being followed by MD',frequency:'Monthly'}
                       ],
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:344, name:'Thyroid Disorders',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/344mn.pdf',
                       selected:false},
			{code:345, name:'Hypertension and Prehypertension',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/345mn.pdf',
                       frequencyCrit:[
                           {crit:'If not being followed by MD', frequency:'Monthly'}
                       ],
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:346, name:'Renal Disease',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/346mn.pdf',
                       frequencyCrit:[
                           {crit:'If not being followed by MD',frequency:'Monthly'}
                       ],
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:347, name:'Cancer',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/347mn.pdf',
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:348, name:'Central Nervous System Disorders',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/348.pdf',
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:349, name:'Genetic and Congenital Disorders',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/349.pdf',
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:351, name:'Inborn Errors of Metabolism',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/351.pdf',
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:352, name:'Infection Diseases (Bronchiolitis added)',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/352mn.pdf',
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:353, name:'Food Allergies',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/353mn.pdf',
                       selected:false},
			{code:354, name:'Celiac Disease',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/354mn.pdf',
                       frequencyCrit:[
                           {crit:'If not being followed by MD',frequency:'Monthly'}
                       ],
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:355, name:'Lactose Intolerance',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/355mn.pdf',
                       selected:false},
			{code:356, name:'Hypoglycemia',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/356mn.pdf',
                       selected:false},
			{code:357, name:'Drug-Nutrient Interactions',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/357mn.pdf',
                       selected:false},
			{code:358, name:'Eating Disorders',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/358mn.pdf',
                       frequencyCrit:[
                           {crit:'If not being followed by MD',frequency:'Monthly'}
                       ],
                       riskCat:'PG,BF',
                       selected:false},
			{code:359, name:'Recent Major Surgery, Trauma, Burns',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/359mn.pdf',
                       selected:false},
			{code:360, name:'Other Medical Conditions',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/360mn.pdf',
                       frequencyCrit:[
                           {crit:'Physical disability with feeding difficulties (infant and child)',frequency:'Monthly'},
                           {crit:'Medical problem, not being followed by MD (infant and child)',frequency:'Monthly'},
                           {crit:'Other, based on individual assessment (infant)',frequency:'Monthly, Bimonthly'},
                           {crit:'Other, based on individual assessment (children, pregnant and postpartum women)',frequency:'Monthly, Bimonthly, Trimonthly'}
                       ],
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:361, name:'Depression',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/361mn.pdf',
                       selected:false},
			{code:362, name:'Developmental, Sensory or Motor Disabilities Interfering with the Ability to Eat',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/362.pdf',
                       riskCat:'PG,BF,I,C',
                       selected:false},
			{code:363, name:'Pre-Diabetes',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/363mn.pdf',
                       selected:false},
			{code:371, name:'Maternal Smoking',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/371mn.pdf',
                       frequencyCrit:[
                           {crit:'Currently smokes >1 ppd (pregnant women)',frequency:'Monthly'}
                       ],
                       riskCat:'PG,BF',
                       selected:false},
			{code:372, name:'Alcohol and Illegal Drug Use',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/372mn.pdf',
                       frequencyCrit:[
                           {crit:'Drinks daily or >4 drinks at one time (pregnant women)', frequency:'Monthly'},
                           {crit:'Current use of cocaine or crack (pregnant women)', frequency:'Monthly'}
                       ],
                       riskCat:'PG,BF',
                       selected:false},
			{code:381, name:'Dental Problems',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/381mn.pdf',
                       selected:false},
			{code:382, name:'Fetal Alcohol Syndrome',
                       category:3,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/bioclinmed/382mn.pdf',
                       selected:false},

			{code:401, name:"Failure to meet dietary guidelines for Americans",
                       category:4,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/dietary/401.pdf',
                       selected:false},
			{code:411, name:"Inappropriate nutrition practices for infants",
                       category:4,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/dietary/411mn.pdf',
                       selected:false},
			{code:425, name:'Inappropriate Nutrition Practices for Children',
                       category:4,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/dietary/425mn.pdf',
                       selected:false},
			{code:427, name:'Inappropriate Nutrition Practices for Women',
                       category:4,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/dietary/427mn.pdf',
                       selected:false},
			{code:428, name:'Dietary Risk Associated with Complementary Feeding Practices',
                       category:4,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/dietary/428mn.pdf',
                       selected:false},

			{code:501, name:'Possibility of Regression',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/501.pdf',
                       selected:false},
			{code:502, name:'Transfer of Certification',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/502.pdf',
                       selected:false},
			{code:503, name:'Presumptive Eligibility for Pregnant Women',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/503.pdf',
                       selected:false},

			{code:601, name:'Breastfeeding Mother of Infant at Nutritional Risk',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/601mn.pdf',
                       selected:false},
			{code:602, name:'Breastfeeding Complications (Women)',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/602mn.pdf',
                       frequencyCrit:[
                           {crit:'Difficulty breastfeeding, immediate referral to lactation counselor',frequency:'Monthly, or telephone follow up'}
                       ],
                       riskCat:'BF',
                       selected:false},
			{code:603, name:'Breastfeeding Complications or Potential Complications (Infants)',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/603mn.pdf',
                       riskCat:'I',
                       selected:false},

			{code:701, name:'Infant Up to 6 Months Old of WIC Mother, or of a Woman Who Would Have Been Eligible during Pregnancy',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/701mn.pdf',
                       selected:false},
			{code:702, name:'Breastfeeding Infant of Woman at Nutritional Risk',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/702mn.pdf',
                       selected:false},
			{code:703, name:'Infant Born of Woman with Mental Retardation or Alcohol or Drug Abuse during Most Recent Pregnancy',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/703mn.pdf',
                       selected:false},

			{code:801, name:'Homelessness',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/801mn.pdf',
                       selected:false},
			{code:802, name:'Migrancy',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/802mn.pdf',
                       selected:false},

			{code:901, name:'Recipient of Abuse',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/901mn.pdf',
                       selected:false},
			{code:902, name:'Woman, or Infant/Child of Primary Caregiver with Limited Ability to Make Feeding Decisions and/or Prepare Food',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/902mn.pdf',
                       selected:false},
			{code:903, name:'Foster Care',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/903.pdf',
                       selected:false},
			{code:904, name:'Environmental Tobacco Smoke Exposure',
                       category:5,
                       url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/other/904mn.pdf',
                       selected:false}
		]
	}
});

