'use strict';

/* Services */

var services = angular.module('myApp.services',[]);
services.value('version', '0.1');
services.factory('DataService', function(){
	return{
		getCategories:[
			{id:1, name:'Anthropometric'},
			{id:2, name:'Biochemical/Clinical/Health Medical'},
			{id:3, name:'Dietary'},
			{id:4, name:'Other Risks'}
		],
		getRisks:[
			//{code:100, name:'Low Weight for Height', description:"TODO", category:1, selected:false},
			{code:101, name:'Underweight (Women)', description:"Underweight women who become pregnant are at a higher risk for delivery of " + 
															   "low birth weight (LBW) infants, retarded fetal growth, and perinatal mortality. " + 
															   "Prepregnancy underweight is also associated with a higher incidence of various " + 
															   "pregnancy complications, such as antepartum hemorrhage, premature rupture " +
															   "of membranes, anemia, endometriosis, and cesarean delivery (2). " +
															   "The goal in prenatal nutritional counseling provided by WIC is to achieve " +
															   "recommended weight gain by emphasizing food choices of high nutritional " +
															   "quality; and for the underweight woman, by encouraging increased " +
															   "consumption and/or the inclusion of some calorically dense foods. "
																, category:1, url:'http://www.health.state.mn.us/divs/fh/wic/localagency/nutrition/riskcodes/anthro/101.pdf', selected:false},
			{code:103, name:'Underweight or At Risk of Becoming Underweight (Infants and Children)', description:"TODO", category:1, selected:false},
			//{code:110, name:'High Weight for Height', description:"TODO", category:1, selected:false},
			{code:111, name:'Overweight (Women)', description:"TODO", category:1, selected:false},
			{code:113, name:'Overweight (Children 2-5 Years of Age)', description:'TODO', category:1, selected:false},
			{code:114, name:'At Risk of Becoming Overweight (Infants and Children)', description:'TODO', category:1, selected:false},
			{code:115, name:'High Weight-for-Length (Infants & Children < 24 Months of Age)', description:'TODO', category:1, selected:false},
			//{code:120, name:'Short Stature', description:'TODO', category:1, selected:false},
			{code:121, name:'Short Stature or At Risk of Short Stature (Infants and Children)', description:'TODO', category:1, selected:false},
			//{code:130, name:'Inappropriate Growth/Weight Gain Pattern', description:'TODO', category:1, selected:false},
			{code:131, name:'Low Maternal Weight Gain', description:'TODO', category:1, selected:false},
			{code:132, name:'Maternal Weight Loss During Pregnancy', description:'TODO', category:1, selected:false},
			{code:133, name:'High Maternal Weight Gain', description:'TODO', category:1, selected:false},
			{code:134, name:'Failure to Thrive', description:'TODO', category:1, selected:false},
			{code:135, name:'Inadequate Growth', description:'TODO', category:1, selected:false},
			//{code:140, name:'Low Birth Weight/Premature Birth', description:'TODO', category:1, selected:false},
			{code:141, name:'Low Birth Weight', description:'TODO', category:1, selected:false},
			{code:142, name:'Prematurity', description:'TODO', category:1, selected:false},
			//{code:150, name:'Other Anthropometric Risk', description:'TODO', category:1, selected:false},
			{code:151, name:'Small for Gestational Age', description:'TODO', category:1, selected:false},
			{code:152, name:'Low Head Circumference', description:'TODO', category:1, selected:false},
			{code:153, name:'Large for Gestational Age', description:'TODO', category:1, selected:false},
			

			//{code:200, name:"Hematocrit or Hemoglobin below state criteria", description:"TODO", category:2, selected:false},
			{code:201, name:'Low Hematocrit/Low Hemoglobin', description:'TODO', category:2, selected:false},
			//{code:210, name:'Other Biochemical Test Results which Indicate Nutritional Abnormality', description:'TODO', category:2, selected:false},
			{code:211, name:'Elevated Blood Lead Levels', description:'TODO', category:2, selected:false},
			//{code:300, name:'Pregnancy - Induced Conditions', description:'TODO', category:2, selected:false},
			{code:301, name:'Hyperemesis Gravidarum', description:'TODO', category:2, selected:false},
			{code:302, name:'Gestational Diabetes', description:'TODO', category:2, selected:false},
			{code:303, name:'History of Gestational Diabetes', description:'TODO', category:2, selected:false},
			{code:304, name:'History of Preeclampsia', description:'TODO', category:2, selected:false},
			//{code:310, name:'Delivery of Low-Birthweight/Premature Infant', description:'TODO', category:2, selected:false},
			{code:311, name:'History of Preterm Delivery', description:'TODO', category:2, selected:false},
			{code:312, name:'History of Low Birth Weight', description:'TODO', category:2, selected:false},
			{code:321, name:'History of Spontaneous Abortion, Fetal or Neonatal Loss', description:'TODO', category:2, selected:false},
			//{code:330, name:'General Obstetrical Risks', description:'TODO', category:2, selected:false},
			{code:331, name:'Pregnancy at a Young Age', description:'TODO', category:2, selected:false},
			{code:332, name:'Closely Spaced Pregnancies', description:'TODO', category:2, selected:false},
			{code:333, name:'High Parity and Young Age', description:'TODO', category:2, selected:false},
			{code:334, name:'Lack of Adequate Prenatal Care', description:'TODO', category:2, selected:false},
			{code:335, name:'Multifetal Gestation', description:'TODO', category:2, selected:false},
			{code:336, name:'Fetal Growth Restriction', description:'TODO', category:2, selected:false},
			{code:337, name:'History of Birth of a Large for Gestational Age Infant', description:'TODO', category:2, selected:false},
			{code:338, name:'Pregnant Woman Currently Breastfeeding', description:'TODO', category:2, selected:false},
			{code:339, name:'History of Birth with Nutrition Related Congenital or Birth Defect', description:'TODO', category:2, selected:false},
			//{code:340, name:'Nutrition-Related Risk Conditions (e.g. Chronic Disease, Genetic Disorder, Infection)', description:'TODO', category:2, selected:false},
			{code:341, name:'Nutrient Deficiency Diseases', description:'TODO', category:2, selected:false},
			{code:342, name:'Gastro-Intestinal Disorders', description:'TODO', category:2, selected:false},
			{code:343, name:'Diabetes Mellitus', description:'TODO', category:2, selected:false},
			{code:344, name:'Thyroid Disorders', description:'TODO', category:2, selected:false},
			{code:345, name:'Hypertension and Prehypertension', description:'TODO', category:2, selected:false},
			{code:346, name:'Renal Disease', description:'TODO', category:2, selected:false},
			{code:347, name:'Cancer', description:'TODO', category:2, selected:false},
			{code:348, name:'Central Nervous System Disorders', description:'TODO', category:2, selected:false},
			{code:349, name:'Genetic and Congenital Disorders', description:'TODO', category:2, selected:false},
			{code:351, name:'Inborn Errors of Metabolism', description:'TODO', category:2, selected:false},
			{code:352, name:'Infection Diseases (Bronchiolitis added)', description:'TODO', category:2, selected:false},
			{code:353, name:'Food Allergies', description:'TODO', category:2, selected:false},
			{code:354, name:'Celiac Disease', description:'TODO', category:2, selected:false},
			{code:355, name:'Lactose Intolerance', description:'TODO', category:2, selected:false},
			{code:356, name:'Hypoglycemia', description:'TODO', category:2, selected:false},
			{code:357, name:'Drug-Nutrient Interactions', description:'TODO', category:2, selected:false},
			{code:358, name:'Eating Disorders', description:'TODO', category:2, selected:false},
			{code:359, name:'Recent Major Surgery, Trauma, Burns', description:'TODO', category:2, selected:false},
			{code:360, name:'Other Medical Conditions', description:'TODO', category:2, selected:false},
			{code:361, name:'Depression', description:'TODO', category:2, selected:false},
			{code:362, name:'Developmental, Sensory or Motor Disabilities Interfering with the Ability to Eat', description:'TODO', category:2, selected:false},
			{code:363, name:'Pre-Diabetes', description:'TODO', category:2, selected:false},
			//{code:370, name:'Substance Abuse (Drugs, Alcohol, Tobacco)', description:'TODO', category:2, selected:false},
			{code:371, name:'Maternal Smoking', description:'TODO', category:2, selected:false},
			{code:372, name:'Alcohol and Illegal Drug Use', description:'TODO', category:2, selected:false},
			//{code:380, name:'Other Health Risks', description:'TODO', category:2, selected:false}
			{code:381, name:'Dental Problems', description:'TODO', category:2, selected:false},
			{code:382, name:'Fetal Alcohol Syndrome', description:'TODO', category:2, selected:false},

			{code:401, name:"Failure to meet dietary guidelines for Americans", description:"TODO", category:3, selected:false},
			{code:411, name:"Inappropriate nutrition practices for infants", description:"TODO", category:3, selected:false},
			{code:425, name:'Inappropriate Nutrition Practices for Children', description:"TODO", category:3, selected:false},
			{code:427, name:'Inappropriate Nutrition Practices for Women', description:"TODO", category:3, selected:false},
			{code:428, name:'Dietary Risk Associated with Complementary Feeding Practices', description:"TODO", category:3, selected:false},


			//{code:500, name:'Regression/Transfer/Presumptive Eligibility', description:"TODO", category:4, selected:false},
			{code:501, name:'Possibility of Regression', description:"TODO", category:4, selected:false},
			{code:502, name:'Transfer of Certification', description:"TODO", category:4, selected:false},
			{code:503, name:'Presumptive Eligibility for Pregnant Women', description:"TODO", category:4, selected:false},
			//{code:600, name:'Breastfeeding Mother/Infant Dyad', description:"TODO", category:4, selected:false},
			{code:601, name:'Breastfeeding Mother of Infant at Nutritional Risk', description:"TODO", category:4, selected:false},
			{code:602, name:'Breastfeeding Complications (Women)', description:"TODO", category:4, selected:false},
			{code:603, name:'Breastfeeding Complications (INfants)', description:"TODO", category:4, selected:false},
			//{code:700, name:'Infant of a WIC-Eligible Mother or Mother at Risk During Pregnancy', description:"TODO", category:4, selected:false},
			{code:701, name:'Infant Up to 6 Months Old of WIC Mother, or of a Woman Who Would Have Been Eligible during Pregnancy', description:"TODO", category:4, selected:false},
			{code:702, name:'Breastfeeding Infant of Woman at Nutritional Risk', description:"TODO", category:4, selected:false},
			{code:703, name:'Infant Born of Woman with Mental Retardation or Alcohol or Drug Abuse during Most Recent Pregnancy', description:"TODO", category:4, selected:false},
			//{code:800, name:'Homelessness/Migrancy', description:"TODO", category:4, selected:false},
			{code:801, name:'Homelessness', description:"TODO", category:4, selected:false},
			{code:802, name:'Migrancy', description:"TODO", category:4, selected:false},
			//{code:900, name:'Other Nutritional Risks', description:"TODO", category:4, selected:false},
			{code:901, name:'Recipient of Abuse', description:"TODO", category:4, selected:false},
			{code:902, name:'Woman, or Infant/Child of Primary Caregiver with Limited Ability to Make Feeding Decisions and/or Prepare Food', description:"TODO", category:4, selected:false},
			{code:903, name:'Foster Care', description:"TODO", category:4, selected:false},
			{code:904, name:'Environmental Tobacco Smoke Exposure', description:"TODO", category:4, selected:false}
		]
	}
});

