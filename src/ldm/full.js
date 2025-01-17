/* eslint-disable */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2020-09-16T08:57:40.255Z; */
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
export const City = {
  /**
   * Display Form Title: city
   * Display Form ID: label.uscities.city
   */
  Default: newAttribute("label.uscities.city")
  /**
   * Display Form Title: location
   * Display Form ID: label.uscities.city.location
   */
  ,
  Location: newAttribute("label.uscities.city.location")
};
/**
 * Attribute Title: Computed Attribute
 * Display Form ID: attr.comp.MUkNnlZ
 */

export const ComputedAttribute = newAttribute("label.comp.MUkNnlZ");
/**
 * Attribute Title: Cost Type
 * Display Form ID: attr.restaurantcostsfact.costtype
 */

export const CostType = newAttribute("label.restaurantcostsfact.costtype");
/**
 * Attribute Title: Employee Id
 * Display Form ID: attr.employee.employeeid
 */

export const EmployeeId = newAttribute("label.employee.employeeid");
export const EmployeeName = {
  /**
   * Display Form Title: Employee Name
   * Display Form ID: label.employee.employeename
   */
  Default: newAttribute("label.employee.employeename")
  /**
   * Display Form Title: Employee URL
   * Display Form ID: label.employee.employeename.employeeurl
   */
  ,
  EmployeeURL: newAttribute("label.employee.employeename.employeeurl")
};
/**
 * Attribute Title: Is Kids Item?
 * Display Form ID: attr.menuitem.iskidsitem
 */

export const IsKidsItem = newAttribute("label.menuitem.iskidsitem");
/**
 * Attribute Title: Line Item Id
 * Display Form ID: attr.salesdetailfact.lineitemid
 */

export const LineItemId = newAttribute("label.salesdetailfact.lineitemid");
/**
 * Attribute Title: Location City
 * Display Form ID: attr.restaurantlocation.locationcity
 */

export const LocationCity = newAttribute("label.restaurantlocation.locationcity");
/**
 * Attribute Title: Location Country
 * Display Form ID: attr.restaurantlocation.locationcountry
 */

export const LocationCountry = newAttribute("label.restaurantlocation.locationcountry");
/**
 * Attribute Title: Location Id
 * Display Form ID: attr.restaurantlocation.locationid
 */

export const LocationId = newAttribute("label.restaurantlocation.locationid");
export const LocationName = {
  /**
   * Display Form Title: Location Name
   * Display Form ID: label.restaurantlocation.locationname
   */
  Default: newAttribute("label.restaurantlocation.locationname")
  /**
   * Display Form Title: Location URL
   * Display Form ID: label.restaurantlocation.locationname.locationurl
   */
  ,
  LocationURL: newAttribute("label.restaurantlocation.locationname.locationurl")
};
/**
 * Attribute Title: Location Ownership
 * Display Form ID: attr.restaurantlocation.locationownership
 */

export const LocationOwnership = newAttribute("label.restaurantlocation.locationownership");
/**
 * Attribute Title: Location Resort
 * Display Form ID: attr.restaurantlocation.locationresort
 */

export const LocationResort = newAttribute("label.restaurantlocation.locationresort");
/**
 * Attribute Title: Location State
 * Display Form ID: attr.restaurantlocation.locationstate
 */

export const LocationState = newAttribute("label.restaurantlocation.locationstate");
/**
 * Attribute Title: Menu Category
 * Display Form ID: attr.menuitem.menucategory
 */

export const MenuCategory = newAttribute("label.menuitem.menucategory");
/**
 * Attribute Title: Menu Item Id
 * Display Form ID: attr.menuitem.menuitemid
 */

export const MenuItemId = newAttribute("label.menuitem.menuitemid");
/**
 * Attribute Title: Menu Item Name
 * Display Form ID: attr.menuitem.menuitemname
 */

export const MenuItemName = newAttribute("label.menuitem.menuitemname");
/**
 * Attribute Title: Restaurant Category
 * Display Form ID: attr.restaurantprofile.restaurantcategory
 */

export const RestaurantCategory = newAttribute("label.restaurantprofile.restaurantcategory");
/**
 * Attribute Title: State Name
 * Display Form ID: attr.uscities.state_name
 */

export const StateName = newAttribute("label.uscities.state_name");
/**
 * Attribute Title: Time Zone
 * Display Form ID: attr.uscities.timezone
 */

export const TimeZone = newAttribute("label.uscities.timezone");
/**
 * Attribute Title: Transaction Id
 * Display Form ID: attr.salesdetailfact.transactionid
 */

export const TransactionId = newAttribute("label.salesdetailfact.transactionid");
/**
 * Metric Title: _Filter Last 4 Quarter
 * Metric ID: aaIHiWZjfWNA
 * Metric Type: MAQL Metric
 */

export const FilterLast4Quarter = newMeasure(idRef("aaIHiWZjfWNA", "measure"));
/**
 * Metric Title: _Filter Quarter
 * Metric ID: aaiF4bffe4yn
 * Metric Type: MAQL Metric
 */

export const FilterQuarter = newMeasure(idRef("aaiF4bffe4yn", "measure"));
/**
 * Metric Title: _TIMELINE Q
 * Metric ID: aaJF1ktqc10F
 * Metric Type: MAQL Metric
 */

export const TIMELINEQ = newMeasure(idRef("aaJF1ktqc10F", "measure"));
/**
 * Metric Title: [AVG] Same Store Sales Growth MoM
 * Metric ID: aasApLbucFp0
 * Metric Type: MAQL Metric
 */

export const AVGSameStoreSalesGrowthMoM = newMeasure(idRef("aasApLbucFp0", "measure"));
/**
 * Metric Title: # Checks
 * Metric ID: aeOt50ngicOD
 * Metric Type: MAQL Metric
 */

export const NrChecks = newMeasure(idRef("aeOt50ngicOD", "measure"));
/**
 * Metric Title: # Employees
 * Metric ID: aaTJSTfSaRBg
 * Metric Type: MAQL Metric
 */

export const NrEmployees = newMeasure(idRef("aaTJSTfSaRBg", "measure"));
/**
 * Metric Title: # Franchise Locations
 * Metric ID: ackJFayteCFG
 * Metric Type: MAQL Metric
 */

export const NrFranchiseLocations = newMeasure(idRef("ackJFayteCFG", "measure"));
/**
 * Metric Title: # Items on Check
 * Metric ID: adFurWGrd2H8
 * Metric Type: MAQL Metric
 */

export const NrItemsOnCheck = newMeasure(idRef("adFurWGrd2H8", "measure"));
/**
 * Metric Title: # Location City
 * Metric ID: aafmUcxXd17M
 * Metric Type: MAQL Metric
 */

export const NrLocationCity = newMeasure(idRef("aafmUcxXd17M", "measure"));
/**
 * Metric Title: # Owned Locations
 * Metric ID: aaBJGIyWbxfO
 * Metric Type: MAQL Metric
 */

export const NrOwnedLocations = newMeasure(idRef("aaBJGIyWbxfO", "measure"));
/**
 * Metric Title: # Restaurants
 * Metric ID: aawAq8YqhM3o
 * Metric Type: MAQL Metric
 */

export const NrRestaurants = newMeasure(idRef("aawAq8YqhM3o", "measure"));
/**
 * Metric Title: % Change $ Avg Total Sales
 * Metric ID: afxBqOrPc5Zh
 * Metric Type: MAQL Metric
 */

export const PercentChange$AvgTotalSales = newMeasure(idRef("afxBqOrPc5Zh", "measure"));
/**
 * Metric Title: % Change $ Avg Total Sales by Server
 * Metric ID: acMCYQZbbwJg
 * Metric Type: MAQL Metric
 */

export const PercentChange$AvgTotalSalesByServer = newMeasure(idRef("acMCYQZbbwJg", "measure"));
/**
 * Metric Title: % of Entree on Total Check Size
 * Metric ID: aagurTlZd1Ul
 * Metric Type: MAQL Metric
 */

export const PercentOfEntreeOnTotalCheckSize = newMeasure(idRef("aagurTlZd1Ul", "measure"));
/**
 * Metric Title: $ Avg Check Size
 * Metric ID: agGujhRmcjQD
 * Metric Type: MAQL Metric
 */

export const $AvgCheckSize = newMeasure(idRef("agGujhRmcjQD", "measure"));
/**
 * Metric Title: $ Avg Daily Total Sales
 * Metric ID: aagJGHg1bxap
 * Metric Type: MAQL Metric
 */

export const $AvgDailyTotalSales = newMeasure(idRef("aagJGHg1bxap", "measure"));
/**
 * Metric Title: $ Avg Daily Total Sales by Server
 * Metric ID: aaAwXH5UfVBx
 * Metric Type: MAQL Metric
 */

export const $AvgDailyTotalSalesByServer = newMeasure(idRef("aaAwXH5UfVBx", "measure"));
/**
 * Metric Title: $ Avg Daily Total Sales by Server - For Previous
 * Metric ID: aeiCXq43bzcl
 * Metric Type: MAQL Metric
 */

export const $AvgDailyTotalSalesByServerForPrevious = newMeasure(idRef("aeiCXq43bzcl", "measure"));
/**
 * Metric Title: $ Avg Restaurant Daily Total Sales
 * Metric ID: acEvQdUMiEAd
 * Metric Type: MAQL Metric
 */

export const $AvgRestaurantDailyTotalSales = newMeasure(idRef("acEvQdUMiEAd", "measure"));
/**
 * Metric Title: $ Avg Restaurant Daily Total Sales - For Previous
 * Metric ID: agbBoXF6haIe
 * Metric Type: MAQL Metric
 */

export const $AvgRestaurantDailyTotalSalesForPrevious = newMeasure(idRef("agbBoXF6haIe", "measure"));
/**
 * Metric Title: $ Avg Total Sales by Restaurant
 * Metric ID: aaAHkMhRgp7S
 * Metric Type: MAQL Metric
 */

export const $AvgTotalSalesByRestaurant = newMeasure(idRef("aaAHkMhRgp7S", "measure"));
/**
 * Metric Title: $ Entree of Total Check Size
 * Metric ID: aavuqQNNaDdc
 * Metric Type: MAQL Metric
 */

export const $EntreeOfTotalCheckSize = newMeasure(idRef("aavuqQNNaDdc", "measure"));
/**
 * Metric Title: $ Franchise Fees
 * Metric ID: aaEGaXAEgB7U
 * Metric Type: MAQL Metric
 */

export const $FranchiseFees = newMeasure(idRef("aaEGaXAEgB7U", "measure"));
/**
 * Metric Title: $ Franchise Fees (Ad Royalty)
 * Metric ID: aabHeqImaK0d
 * Metric Type: MAQL Metric
 */

export const $FranchiseFeesAdRoyalty = newMeasure(idRef("aabHeqImaK0d", "measure"));
/**
 * Metric Title: $ Franchise Fees (Initial Fee) Last Quarter Timeline
 * Metric ID: aayHf60BfkfS
 * Metric Type: MAQL Metric
 */

export const $FranchiseFeesInitialFeeLastQuarterTimeline = newMeasure(idRef("aayHf60BfkfS", "measure"));
/**
 * Metric Title: $ Franchise Fees (Initial Franchise Fee)
 * Metric ID: aaDHcv6wevkl
 * Metric Type: MAQL Metric
 */

export const $FranchiseFeesInitialFranchiseFee = newMeasure(idRef("aaDHcv6wevkl", "measure"));
/**
 * Metric Title: $ Franchise Fees (Ongoing Royalty)
 * Metric ID: aaWGcgnsfxIg
 * Metric Type: MAQL Metric
 */

export const $FranchiseFeesOngoingRoyalty = newMeasure(idRef("aaWGcgnsfxIg", "measure"));
/**
 * Metric Title: $ Franchise Fees (Ongoing Royalty) Last Quarter Timeline
 * Metric ID: aaeHf3Mofjir
 * Metric Type: MAQL Metric
 */

export const $FranchiseFeesOngoingRoyaltyLastQuarterTimeline = newMeasure(idRef("aaeHf3Mofjir", "measure"));
/**
 * Metric Title: $ Franchised Sales
 * Metric ID: aclF4oDIe5hP
 * Metric Type: MAQL Metric
 */

export const $FranchisedSales = newMeasure(idRef("aclF4oDIe5hP", "measure"));
/**
 * Metric Title: $ Gross Profit
 * Metric ID: aa5JBkFDa7sJ
 * Metric Type: MAQL Metric
 */

export const $GrossProfit = newMeasure(idRef("aa5JBkFDa7sJ", "measure"));
/**
 * Metric Title: $ Owned Sales
 * Metric ID: aaMF7AZGbALB
 * Metric Type: MAQL Metric
 */

export const $OwnedSales = newMeasure(idRef("aaMF7AZGbALB", "measure"));
/**
 * Metric Title: $ Owned Sales Last Quarter Timeline
 * Metric ID: abHF4LCfdNdt
 * Metric Type: MAQL Metric
 */

export const $OwnedSalesLastQuarterTimeline = newMeasure(idRef("abHF4LCfdNdt", "measure"));
/**
 * Metric Title: $ Scheduled Costs
 * Metric ID: aclJxvAlhCp0
 * Metric Type: MAQL Metric
 */

export const $ScheduledCosts = newMeasure(idRef("aclJxvAlhCp0", "measure"));
/**
 * Metric Title: $ Scheduled Labor Costs
 * Metric ID: aaGJzwrDdbfQ
 * Metric Type: MAQL Metric
 */

export const $ScheduledLaborCosts = newMeasure(idRef("aaGJzwrDdbfQ", "measure"));
/**
 * Metric Title: $ Total Check Value
 * Metric ID: aattxAMVg2YU
 * Metric Type: MAQL Metric
 */

export const $TotalCheckValue = newMeasure(idRef("aattxAMVg2YU", "measure"));
/**
 * Metric Title: $ Total Costs
 * Metric ID: aaQHncjzfrtR
 * Metric Type: MAQL Metric
 */

export const $TotalCosts = newMeasure(idRef("aaQHncjzfrtR", "measure"));
/**
 * Metric Title: $ Total Costs - COGs
 * Metric ID: aafHpxx0f3gL
 * Metric Type: MAQL Metric
 */

export const $TotalCostsCOGs = newMeasure(idRef("aafHpxx0f3gL", "measure"));
/**
 * Metric Title: $ Total Costs - Labor
 * Metric ID: aamHpELXdotY
 * Metric Type: MAQL Metric
 */

export const $TotalCostsLabor = newMeasure(idRef("aamHpELXdotY", "measure"));
/**
 * Metric Title: $ Total Costs - Occupany
 * Metric ID: aagHqrJ6iAhD
 * Metric Type: MAQL Metric
 */

export const $TotalCostsOccupany = newMeasure(idRef("aagHqrJ6iAhD", "measure"));
/**
 * Metric Title: $ Total Costs - Operating
 * Metric ID: aaeHqv2qhEE1
 * Metric Type: MAQL Metric
 */

export const $TotalCostsOperating = newMeasure(idRef("aaeHqv2qhEE1", "measure"));
/**
 * Metric Title: $ Total Sales
 * Metric ID: aa7ulGyKhIE5
 * Metric Type: MAQL Metric
 */

export const $TotalSales = newMeasure(idRef("aa7ulGyKhIE5", "measure"));
/**
 * Metric Title: $ Total Sales Last Quarter Timeline
 * Metric ID: aajFRfDPaJrB
 * Metric Type: MAQL Metric
 */

export const $TotalSalesLastQuarterTimeline = newMeasure(idRef("aajFRfDPaJrB", "measure"));
/**
 * Metric Title: Avg # Checks
 * Metric ID: aakujkP2g68f
 * Metric Type: MAQL Metric
 */

export const AvgNrChecks = newMeasure(idRef("aakujkP2g68f", "measure"));
/**
 * Metric Title: Avg # Employees - Franchised
 * Metric ID: aciJJMmDfGYG
 * Metric Type: MAQL Metric
 */

export const AvgNrEmployeesFranchised = newMeasure(idRef("aciJJMmDfGYG", "measure"));
/**
 * Metric Title: Avg # Employees - Owned
 * Metric ID: abQJKPrmcvPv
 * Metric Type: MAQL Metric
 */

export const AvgNrEmployeesOwned = newMeasure(idRef("abQJKPrmcvPv", "measure"));
/**
 * Metric Title: Avg # Items on Check
 * Metric ID: adFurSoPaUaF
 * Metric Type: MAQL Metric
 */

export const AvgNrItemsOnCheck = newMeasure(idRef("adFurSoPaUaF", "measure"));
/**
 * Metric Title: Avg # Items on Check By Server
 * Metric ID: aaKwQwBIg1WY
 * Metric Type: MAQL Metric
 */

export const AvgNrItemsOnCheckByServer = newMeasure(idRef("aaKwQwBIg1WY", "measure"));
/**
 * Metric Title: Avg % of Entree on Total Check size
 * Metric ID: adQvRqlFawrq
 * Metric Type: MAQL Metric
 */

export const AvgPercentOfEntreeOnTotalCheckSize = newMeasure(idRef("adQvRqlFawrq", "measure"));
/**
 * Metric Title: Avg Check Size by Restaurant
 * Metric ID: abmxly1WgN0A
 * Metric Type: MAQL Metric
 */

export const AvgCheckSizeByRestaurant = newMeasure(idRef("abmxly1WgN0A", "measure"));
/**
 * Metric Title: Avg Check Size by Server
 * Metric ID: afewRzGAersh
 * Metric Type: MAQL Metric
 */

export const AvgCheckSizeByServer = newMeasure(idRef("afewRzGAersh", "measure"));
/**
 * Metric Title: Avg Daily # Checks by Restaurant
 * Metric ID: aaKvTDSga0Qc
 * Metric Type: MAQL Metric
 */

export const AvgDailyNrChecksByRestaurant = newMeasure(idRef("aaKvTDSga0Qc", "measure"));
/**
 * Metric Title: Avg Daily # of Check by Server
 * Metric ID: afgwRbw8ekwA
 * Metric Type: MAQL Metric
 */

export const AvgDailyNrOfCheckByServer = newMeasure(idRef("afgwRbw8ekwA", "measure"));
/**
 * Metric Title: Avg Entree % By Restaurant
 * Metric ID: afQHUg8AfYdl
 * Metric Type: MAQL Metric
 */

export const AvgEntreePercentByRestaurant = newMeasure(idRef("afQHUg8AfYdl", "measure"));
/**
 * Metric Title: Avg Entree % By Server
 * Metric ID: aexwEtn0eHwB
 * Metric Type: MAQL Metric
 */

export const AvgEntreePercentByServer = newMeasure(idRef("aexwEtn0eHwB", "measure"));
/**
 * Metric Title: Franchise Fee (Initial Fee) % Change
 * Metric ID: aabHgIqabggQ
 * Metric Type: MAQL Metric
 */

export const FranchiseFeeInitialFeePercentChange = newMeasure(idRef("aabHgIqabggQ", "measure"));
/**
 * Metric Title: Franchise Fee (Ongoing Royalty) % Change
 * Metric ID: aacHgvmIfZOX
 * Metric Type: MAQL Metric
 */

export const FranchiseFeeOngoingRoyaltyPercentChange = newMeasure(idRef("aacHgvmIfZOX", "measure"));
/**
 * Metric Title: Gross Profit %
 * Metric ID: abBJBoqTe5IH
 * Metric Type: MAQL Metric
 */

export const GrossProfitPercent = newMeasure(idRef("abBJBoqTe5IH", "measure"));
/**
 * Metric Title: Owned Sales % Change
 * Metric ID: aacF8F2Me67e
 * Metric Type: MAQL Metric
 */

export const OwnedSalesPercentChange = newMeasure(idRef("aacF8F2Me67e", "measure"));
/**
 * Metric Title: Same Store Sales
 * Metric ID: aaXAnw7hcbFY
 * Metric Type: MAQL Metric
 */

export const SameStoreSales = newMeasure(idRef("aaXAnw7hcbFY", "measure"));
/**
 * Metric Title: Same Store Sales MoM Growth
 * Metric ID: aciAmeQCfGmo
 * Metric Type: MAQL Metric
 */

export const SameStoreSalesMoMGrowth = newMeasure(idRef("aciAmeQCfGmo", "measure"));
/**
 * Metric Title: Same Store Sales Previous Month
 * Metric ID: aagAoGqjcuCZ
 * Metric Type: MAQL Metric
 */

export const SameStoreSalesPreviousMonth = newMeasure(idRef("aagAoGqjcuCZ", "measure"));
/**
 * Metric Title: Total # Franchised Employees
 * Metric ID: afrJGKajgogi
 * Metric Type: MAQL Metric
 */

export const TotalNrFranchisedEmployees = newMeasure(idRef("afrJGKajgogi", "measure"));
/**
 * Metric Title: Total # Owned Employees
 * Metric ID: aazJLFHCdCBh
 * Metric Type: MAQL Metric
 */

export const TotalNrOwnedEmployees = newMeasure(idRef("aazJLFHCdCBh", "measure"));
/**
 * Metric Title: Total Sales % Change
 * Metric ID: abhFQRhibZKx
 * Metric Type: MAQL Metric
 */

export const TotalSalesPercentChange = newMeasure(idRef("abhFQRhibZKx", "measure"));
/**
 * Fact Title: $ Menu Item Sales
 * Fact ID: fact.salesdetailfact.menuitemsales
 */

export const $MenuItemSales = {
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: $ Menu Item Sales
   * Fact ID: fact.salesdetailfact.menuitemsales
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Cost
 * Fact ID: fact.restaurantcostsfact.cost
 */

export const Cost = {
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Cost
   * Fact ID: fact.restaurantcostsfact.cost
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Density
 * Fact ID: fact.uscities.density
 */

export const Density = {
  /**
   * Fact Title: Density
   * Fact ID: fact.uscities.density
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.uscities.density", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Density
   * Fact ID: fact.uscities.density
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.uscities.density", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Density
   * Fact ID: fact.uscities.density
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.uscities.density", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Density
   * Fact ID: fact.uscities.density
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.uscities.density", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Density
   * Fact ID: fact.uscities.density
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.uscities.density", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Density
   * Fact ID: fact.uscities.density
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.uscities.density", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Density
   * Fact ID: fact.uscities.density
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.uscities.density", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Menu Item Quantity
 * Fact ID: fact.salesdetailfact.menuitemquantity
 */

export const MenuItemQuantity = {
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Menu Item Quantity
   * Fact ID: fact.salesdetailfact.menuitemquantity
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Population
 * Fact ID: fact.uscities.population
 */

export const Population = {
  /**
   * Fact Title: Population
   * Fact ID: fact.uscities.population
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.uscities.population", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Population
   * Fact ID: fact.uscities.population
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.uscities.population", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Population
   * Fact ID: fact.uscities.population
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.uscities.population", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Population
   * Fact ID: fact.uscities.population
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.uscities.population", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Population
   * Fact ID: fact.uscities.population
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.uscities.population", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Population
   * Fact ID: fact.uscities.population
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.uscities.population", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Population
   * Fact ID: fact.uscities.population
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.uscities.population", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Scheduled Cost
 * Fact ID: fact.restaurantcostsfact.scheduledcost
 */

export const ScheduledCost = {
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: count
   */
  ,
  Count: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), m => m.aggregation("count"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Scheduled Cost
   * Fact ID: fact.restaurantcostsfact.scheduledcost
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), m => m.aggregation("runsum"))
};
/**
 * Attribute Title: Year (Date)
 * Display Form ID: date.year
 */

export const DateYear = newAttribute("date.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date)
 * Display Form ID: date.quarter.in.year
 */

export const DateQuarter = newAttribute("date.aam81lMifn6q");
export const DateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("date.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.aau81lMifn6q
   */
  ,
  FromTo: newAttribute("date.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Date)
   * Display Form ID: date.aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("date.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
   * Display Form ID: date.aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("date.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Date)
   * Display Form ID: date.aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("date.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Date)
 * Display Form ID: date.week.in.year
 */

export const DateWeekSunSat = newAttribute("date.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date)
 * Display Form ID: date.week.in.quarter
 */

export const DateWeekSunSatOfQtr = newAttribute("date.aaO81lMifn6q");
export const DateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.aa281lMifn6q
   */
  WeekNrYear: newAttribute("date.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("date.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Date)
 * Display Form ID: date.euweek.in.year
 */

export const DateWeekMonSun = newAttribute("date.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date)
 * Display Form ID: date.euweek.in.quarter
 */

export const DateWeekMonSunOfQtr = newAttribute("date.abg81lMifn6q");
export const DateMonth = {
  /**
   * Display Form Title: Short (Jan) (Date)
   * Display Form ID: date.abm81lMifn6q
   */
  Short: newAttribute("date.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Date)
   * Display Form ID: date.abs81lMifn6q
   */
  ,
  Long: newAttribute("date.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Date)
   * Display Form ID: date.abq81lMifn6q
   */
  ,
  Number: newAttribute("date.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Date)
   * Display Form ID: date.abo81lMifn6q
   */
  ,
  MQ: newAttribute("date.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Date)
 * Display Form ID: date.month.in.quarter
 */

export const DateMonthOfQuarter = newAttribute("date.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date)
 * Display Form ID: date.day.in.year
 */

export const DateDayOfYear = newAttribute("date.abE81lMifn6q");
export const DateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Date)
   * Display Form ID: date.abK81lMifn6q
   */
  Short: newAttribute("date.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Date)
   * Display Form ID: date.abO81lMifn6q
   */
  ,
  Long: newAttribute("date.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Date)
   * Display Form ID: date.abM81lMifn6q
   */
  ,
  Number: newAttribute("date.abM81lMifn6q")
};
export const DateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Date)
   * Display Form ID: date.abU81lMifn6q
   */
  Short: newAttribute("date.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Date)
   * Display Form ID: date.abY81lMifn6q
   */
  ,
  Long: newAttribute("date.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Date)
   * Display Form ID: date.abW81lMifn6q
   */
  ,
  Number: newAttribute("date.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Date)
 * Display Form ID: date.day.in.quarter
 */

export const DateDayOfQuarter = newAttribute("date.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date)
 * Display Form ID: date.day.in.month
 */

export const DateDayOfMonth = newAttribute("date.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date)
 * Display Form ID: date.quarter
 */

export const DateQuarterYear = newAttribute("date.aci81lMifn6q");
export const DateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Date)
   * Display Form ID: date.act81lMifn6q
   */
  Short: newAttribute("date.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Date)
   * Display Form ID: date.acx81lMifn6q
   */
  ,
  Long: newAttribute("date.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Date)
   * Display Form ID: date.acv81lMifn6q
   */
  ,
  Number: newAttribute("date.acv81lMifn6q")
};
export const DateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Date)
   * Display Form ID: date.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("date.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Date)
   * Display Form ID: date.date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("date.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Date)
   * Display Form ID: date.date.mdyy
   */
  ,
  MDYy: newAttribute("date.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
   * Display Form ID: date.date.long
   */
  ,
  Long: newAttribute("date.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Date)
   * Display Form ID: date.date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("date.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Date)
   * Display Form ID: date.date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("date.date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Timeline)
 * Display Form ID: timeline.year
 */

export const TimelineYear = newAttribute("timeline.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Timeline)
 * Display Form ID: timeline.quarter.in.year
 */

export const TimelineQuarter = newAttribute("timeline.aam81lMifn6q");
export const TimelineWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Timeline)
   * Display Form ID: timeline.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("timeline.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Timeline)
   * Display Form ID: timeline.aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("timeline.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Timeline)
   * Display Form ID: timeline.aau81lMifn6q
   */
  ,
  FromTo: newAttribute("timeline.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Timeline)
   * Display Form ID: timeline.aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("timeline.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Timeline)
   * Display Form ID: timeline.aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("timeline.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Timeline)
   * Display Form ID: timeline.aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("timeline.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Timeline)
 * Display Form ID: timeline.week.in.year
 */

export const TimelineWeekSunSat = newAttribute("timeline.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Timeline)
 * Display Form ID: timeline.week.in.quarter
 */

export const TimelineWeekSunSatOfQtr = newAttribute("timeline.aaO81lMifn6q");
export const TimelineWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Timeline)
   * Display Form ID: timeline.aa281lMifn6q
   */
  WeekNrYear: newAttribute("timeline.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Timeline)
   * Display Form ID: timeline.aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("timeline.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Timeline)
   * Display Form ID: timeline.aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("timeline.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Timeline)
 * Display Form ID: timeline.euweek.in.year
 */

export const TimelineWeekMonSun = newAttribute("timeline.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Timeline)
 * Display Form ID: timeline.euweek.in.quarter
 */

export const TimelineWeekMonSunOfQtr = newAttribute("timeline.abg81lMifn6q");
export const TimelineMonth = {
  /**
   * Display Form Title: Short (Jan) (Timeline)
   * Display Form ID: timeline.abm81lMifn6q
   */
  Short: newAttribute("timeline.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Timeline)
   * Display Form ID: timeline.abs81lMifn6q
   */
  ,
  Long: newAttribute("timeline.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Timeline)
   * Display Form ID: timeline.abq81lMifn6q
   */
  ,
  Number: newAttribute("timeline.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Timeline)
   * Display Form ID: timeline.abo81lMifn6q
   */
  ,
  MQ: newAttribute("timeline.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Timeline)
 * Display Form ID: timeline.month.in.quarter
 */

export const TimelineMonthOfQuarter = newAttribute("timeline.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Timeline)
 * Display Form ID: timeline.day.in.year
 */

export const TimelineDayOfYear = newAttribute("timeline.abE81lMifn6q");
export const TimelineDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Timeline)
   * Display Form ID: timeline.abK81lMifn6q
   */
  Short: newAttribute("timeline.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Timeline)
   * Display Form ID: timeline.abO81lMifn6q
   */
  ,
  Long: newAttribute("timeline.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Timeline)
   * Display Form ID: timeline.abM81lMifn6q
   */
  ,
  Number: newAttribute("timeline.abM81lMifn6q")
};
export const TimelineDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Timeline)
   * Display Form ID: timeline.abU81lMifn6q
   */
  Short: newAttribute("timeline.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Timeline)
   * Display Form ID: timeline.abY81lMifn6q
   */
  ,
  Long: newAttribute("timeline.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Timeline)
   * Display Form ID: timeline.abW81lMifn6q
   */
  ,
  Number: newAttribute("timeline.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Timeline)
 * Display Form ID: timeline.day.in.quarter
 */

export const TimelineDayOfQuarter = newAttribute("timeline.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Timeline)
 * Display Form ID: timeline.day.in.month
 */

export const TimelineDayOfMonth = newAttribute("timeline.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Timeline)
 * Display Form ID: timeline.quarter
 */

export const TimelineQuarterYear = newAttribute("timeline.aci81lMifn6q");
export const TimelineMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Timeline)
   * Display Form ID: timeline.act81lMifn6q
   */
  Short: newAttribute("timeline.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Timeline)
   * Display Form ID: timeline.acx81lMifn6q
   */
  ,
  Long: newAttribute("timeline.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Timeline)
   * Display Form ID: timeline.acv81lMifn6q
   */
  ,
  Number: newAttribute("timeline.acv81lMifn6q")
};
export const TimelineDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Timeline)
   * Display Form ID: timeline.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("timeline.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Timeline)
   * Display Form ID: timeline.date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("timeline.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Timeline)
   * Display Form ID: timeline.date.mdyy
   */
  ,
  MDYy: newAttribute("timeline.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Timeline)
   * Display Form ID: timeline.date.long
   */
  ,
  Long: newAttribute("timeline.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Timeline)
   * Display Form ID: timeline.date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("timeline.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Timeline)
   * Display Form ID: timeline.date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("timeline.date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_year
 */

export const FiscalDateYear = newAttribute("fiscaldate.fiscaljun1_aag81lMifn6q");
/**
 * Attribute Title: Quarter (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_quarter.in.year
 */

export const FiscalDateQuarter = newAttribute("fiscaldate.fiscaljun1_aam81lMifn6q");
export const FiscalDateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aaA81lMifn6q
   */
  WeekNrYear: newAttribute("fiscaldate.fiscaljun1_aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("fiscaldate.fiscaljun1_aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aau81lMifn6q
   */
  ,
  FromTo: newAttribute("fiscaldate.fiscaljun1_aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("fiscaldate.fiscaljun1_aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("fiscaldate.fiscaljun1_aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("fiscaldate.fiscaljun1_aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_week.in.year
 */

export const FiscalDateWeekSunSat = newAttribute("fiscaldate.fiscaljun1_aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_week.in.quarter
 */

export const FiscalDateWeekSunSatOfQtr = newAttribute("fiscaldate.fiscaljun1_aaO81lMifn6q");
export const FiscalDateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aa281lMifn6q
   */
  WeekNrYear: newAttribute("fiscaldate.fiscaljun1_aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("fiscaldate.fiscaljun1_aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("fiscaldate.fiscaljun1_aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_euweek.in.year
 */

export const FiscalDateWeekMonSun = newAttribute("fiscaldate.fiscaljun1_aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_euweek.in.quarter
 */

export const FiscalDateWeekMonSunOfQtr = newAttribute("fiscaldate.fiscaljun1_abg81lMifn6q");
export const FiscalDateMonth = {
  /**
   * Display Form Title: Short (Jan) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abm81lMifn6q
   */
  Short: newAttribute("fiscaldate.fiscaljun1_abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abs81lMifn6q
   */
  ,
  Long: newAttribute("fiscaldate.fiscaljun1_abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abq81lMifn6q
   */
  ,
  Number: newAttribute("fiscaldate.fiscaljun1_abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abo81lMifn6q
   */
  ,
  MQ: newAttribute("fiscaldate.fiscaljun1_abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_month.in.quarter
 */

export const FiscalDateMonthOfQuarter = newAttribute("fiscaldate.fiscaljun1_aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_day.in.year
 */

export const FiscalDateDayOfYear = newAttribute("fiscaldate.fiscaljun1_abE81lMifn6q");
export const FiscalDateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abK81lMifn6q
   */
  Short: newAttribute("fiscaldate.fiscaljun1_abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abO81lMifn6q
   */
  ,
  Long: newAttribute("fiscaldate.fiscaljun1_abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abM81lMifn6q
   */
  ,
  Number: newAttribute("fiscaldate.fiscaljun1_abM81lMifn6q")
};
export const FiscalDateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abU81lMifn6q
   */
  Short: newAttribute("fiscaldate.fiscaljun1_abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abY81lMifn6q
   */
  ,
  Long: newAttribute("fiscaldate.fiscaljun1_abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_abW81lMifn6q
   */
  ,
  Number: newAttribute("fiscaldate.fiscaljun1_abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_day.in.quarter
 */

export const FiscalDateDayOfQuarter = newAttribute("fiscaldate.fiscaljun1_ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_day.in.month
 */

export const FiscalDateDayOfMonth = newAttribute("fiscaldate.fiscaljun1_aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Fiscal Date)
 * Display Form ID: fiscaldate.fiscaljun1_quarter
 */

export const FiscalDateQuarterYear = newAttribute("fiscaldate.fiscaljun1_aci81lMifn6q");
export const FiscalDateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_act81lMifn6q
   */
  Short: newAttribute("fiscaldate.fiscaljun1_act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_acx81lMifn6q
   */
  ,
  Long: newAttribute("fiscaldate.fiscaljun1_acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_acv81lMifn6q
   */
  ,
  Number: newAttribute("fiscaldate.fiscaljun1_acv81lMifn6q")
};
export const FiscalDateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.mmddyyyy
   */
  MmDdYyyy: newAttribute("fiscaldate.fiscaljun1_date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("fiscaldate.fiscaljun1_date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.mdyy
   */
  ,
  MDYy: newAttribute("fiscaldate.fiscaljun1_date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.long
   */
  ,
  Long: newAttribute("fiscaldate.fiscaljun1_date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("fiscaldate.fiscaljun1_date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Fiscal Date)
   * Display Form ID: fiscaldate.fiscaljun1_date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("fiscaldate.fiscaljun1_date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Date 1)
 * Display Form ID: date_1.year
 */

export const Date1Year = newAttribute("date_1.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date 1)
 * Display Form ID: date_1.quarter.in.year
 */

export const Date1Quarter = newAttribute("date_1.aam81lMifn6q");
export const Date1WeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date 1)
   * Display Form ID: date_1.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("date_1.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Date 1)
   * Display Form ID: date_1.aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date_1.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Date 1)
   * Display Form ID: date_1.aau81lMifn6q
   */
  ,
  FromTo: newAttribute("date_1.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Date 1)
   * Display Form ID: date_1.aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("date_1.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Date 1)
   * Display Form ID: date_1.aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("date_1.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Date 1)
   * Display Form ID: date_1.aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("date_1.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Date 1)
 * Display Form ID: date_1.week.in.year
 */

export const Date1WeekSunSat = newAttribute("date_1.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date 1)
 * Display Form ID: date_1.week.in.quarter
 */

export const Date1WeekSunSatOfQtr = newAttribute("date_1.aaO81lMifn6q");
export const Date1WeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date 1)
   * Display Form ID: date_1.aa281lMifn6q
   */
  WeekNrYear: newAttribute("date_1.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Date 1)
   * Display Form ID: date_1.aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date_1.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Date 1)
   * Display Form ID: date_1.aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("date_1.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Date 1)
 * Display Form ID: date_1.euweek.in.year
 */

export const Date1WeekMonSun = newAttribute("date_1.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date 1)
 * Display Form ID: date_1.euweek.in.quarter
 */

export const Date1WeekMonSunOfQtr = newAttribute("date_1.abg81lMifn6q");
export const Date1Month = {
  /**
   * Display Form Title: Short (Jan) (Date 1)
   * Display Form ID: date_1.abm81lMifn6q
   */
  Short: newAttribute("date_1.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Date 1)
   * Display Form ID: date_1.abs81lMifn6q
   */
  ,
  Long: newAttribute("date_1.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Date 1)
   * Display Form ID: date_1.abq81lMifn6q
   */
  ,
  Number: newAttribute("date_1.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Date 1)
   * Display Form ID: date_1.abo81lMifn6q
   */
  ,
  MQ: newAttribute("date_1.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Date 1)
 * Display Form ID: date_1.month.in.quarter
 */

export const Date1MonthOfQuarter = newAttribute("date_1.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date 1)
 * Display Form ID: date_1.day.in.year
 */

export const Date1DayOfYear = newAttribute("date_1.abE81lMifn6q");
export const Date1DayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Date 1)
   * Display Form ID: date_1.abK81lMifn6q
   */
  Short: newAttribute("date_1.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Date 1)
   * Display Form ID: date_1.abO81lMifn6q
   */
  ,
  Long: newAttribute("date_1.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Date 1)
   * Display Form ID: date_1.abM81lMifn6q
   */
  ,
  Number: newAttribute("date_1.abM81lMifn6q")
};
export const Date1DayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Date 1)
   * Display Form ID: date_1.abU81lMifn6q
   */
  Short: newAttribute("date_1.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Date 1)
   * Display Form ID: date_1.abY81lMifn6q
   */
  ,
  Long: newAttribute("date_1.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Date 1)
   * Display Form ID: date_1.abW81lMifn6q
   */
  ,
  Number: newAttribute("date_1.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Date 1)
 * Display Form ID: date_1.day.in.quarter
 */

export const Date1DayOfQuarter = newAttribute("date_1.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date 1)
 * Display Form ID: date_1.day.in.month
 */

export const Date1DayOfMonth = newAttribute("date_1.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date 1)
 * Display Form ID: date_1.quarter
 */

export const Date1QuarterYear = newAttribute("date_1.aci81lMifn6q");
export const Date1MonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Date 1)
   * Display Form ID: date_1.act81lMifn6q
   */
  Short: newAttribute("date_1.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Date 1)
   * Display Form ID: date_1.acx81lMifn6q
   */
  ,
  Long: newAttribute("date_1.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Date 1)
   * Display Form ID: date_1.acv81lMifn6q
   */
  ,
  Number: newAttribute("date_1.acv81lMifn6q")
};
export const Date1Date = {
  /**
   * Display Form Title: mm/dd/yyyy (Date 1)
   * Display Form ID: date_1.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("date_1.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Date 1)
   * Display Form ID: date_1.date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("date_1.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Date 1)
   * Display Form ID: date_1.date.mdyy
   */
  ,
  MDYy: newAttribute("date_1.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Date 1)
   * Display Form ID: date_1.date.long
   */
  ,
  Long: newAttribute("date_1.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Date 1)
   * Display Form ID: date_1.date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("date_1.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Date 1)
   * Display Form ID: date_1.date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("date_1.date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Date 2)
 * Display Form ID: date_2.year
 */

export const Date2Year = newAttribute("date_2.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date 2)
 * Display Form ID: date_2.quarter.in.year
 */

export const Date2Quarter = newAttribute("date_2.aam81lMifn6q");
export const Date2WeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date 2)
   * Display Form ID: date_2.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("date_2.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Date 2)
   * Display Form ID: date_2.aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date_2.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Date 2)
   * Display Form ID: date_2.aau81lMifn6q
   */
  ,
  FromTo: newAttribute("date_2.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Date 2)
   * Display Form ID: date_2.aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("date_2.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Date 2)
   * Display Form ID: date_2.aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("date_2.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Date 2)
   * Display Form ID: date_2.aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("date_2.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Date 2)
 * Display Form ID: date_2.week.in.year
 */

export const Date2WeekSunSat = newAttribute("date_2.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date 2)
 * Display Form ID: date_2.week.in.quarter
 */

export const Date2WeekSunSatOfQtr = newAttribute("date_2.aaO81lMifn6q");
export const Date2WeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date 2)
   * Display Form ID: date_2.aa281lMifn6q
   */
  WeekNrYear: newAttribute("date_2.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Date 2)
   * Display Form ID: date_2.aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date_2.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Date 2)
   * Display Form ID: date_2.aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("date_2.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Date 2)
 * Display Form ID: date_2.euweek.in.year
 */

export const Date2WeekMonSun = newAttribute("date_2.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date 2)
 * Display Form ID: date_2.euweek.in.quarter
 */

export const Date2WeekMonSunOfQtr = newAttribute("date_2.abg81lMifn6q");
export const Date2Month = {
  /**
   * Display Form Title: Short (Jan) (Date 2)
   * Display Form ID: date_2.abm81lMifn6q
   */
  Short: newAttribute("date_2.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Date 2)
   * Display Form ID: date_2.abs81lMifn6q
   */
  ,
  Long: newAttribute("date_2.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Date 2)
   * Display Form ID: date_2.abq81lMifn6q
   */
  ,
  Number: newAttribute("date_2.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Date 2)
   * Display Form ID: date_2.abo81lMifn6q
   */
  ,
  MQ: newAttribute("date_2.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Date 2)
 * Display Form ID: date_2.month.in.quarter
 */

export const Date2MonthOfQuarter = newAttribute("date_2.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date 2)
 * Display Form ID: date_2.day.in.year
 */

export const Date2DayOfYear = newAttribute("date_2.abE81lMifn6q");
export const Date2DayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Date 2)
   * Display Form ID: date_2.abK81lMifn6q
   */
  Short: newAttribute("date_2.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Date 2)
   * Display Form ID: date_2.abO81lMifn6q
   */
  ,
  Long: newAttribute("date_2.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Date 2)
   * Display Form ID: date_2.abM81lMifn6q
   */
  ,
  Number: newAttribute("date_2.abM81lMifn6q")
};
export const Date2DayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Date 2)
   * Display Form ID: date_2.abU81lMifn6q
   */
  Short: newAttribute("date_2.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Date 2)
   * Display Form ID: date_2.abY81lMifn6q
   */
  ,
  Long: newAttribute("date_2.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Date 2)
   * Display Form ID: date_2.abW81lMifn6q
   */
  ,
  Number: newAttribute("date_2.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Date 2)
 * Display Form ID: date_2.day.in.quarter
 */

export const Date2DayOfQuarter = newAttribute("date_2.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date 2)
 * Display Form ID: date_2.day.in.month
 */

export const Date2DayOfMonth = newAttribute("date_2.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date 2)
 * Display Form ID: date_2.quarter
 */

export const Date2QuarterYear = newAttribute("date_2.aci81lMifn6q");
export const Date2MonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Date 2)
   * Display Form ID: date_2.act81lMifn6q
   */
  Short: newAttribute("date_2.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Date 2)
   * Display Form ID: date_2.acx81lMifn6q
   */
  ,
  Long: newAttribute("date_2.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Date 2)
   * Display Form ID: date_2.acv81lMifn6q
   */
  ,
  Number: newAttribute("date_2.acv81lMifn6q")
};
export const Date2Date = {
  /**
   * Display Form Title: mm/dd/yyyy (Date 2)
   * Display Form ID: date_2.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("date_2.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Date 2)
   * Display Form ID: date_2.date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("date_2.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Date 2)
   * Display Form ID: date_2.date.mdyy
   */
  ,
  MDYy: newAttribute("date_2.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Date 2)
   * Display Form ID: date_2.date.long
   */
  ,
  Long: newAttribute("date_2.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Date 2)
   * Display Form ID: date_2.date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("date_2.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Date 2)
   * Display Form ID: date_2.date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("date_2.date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Date 3)
 * Display Form ID: date_3.year
 */

export const Date3Year = newAttribute("date_3.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date 3)
 * Display Form ID: date_3.quarter.in.year
 */

export const Date3Quarter = newAttribute("date_3.aam81lMifn6q");
export const Date3WeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date 3)
   * Display Form ID: date_3.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("date_3.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Date 3)
   * Display Form ID: date_3.aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date_3.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Date 3)
   * Display Form ID: date_3.aau81lMifn6q
   */
  ,
  FromTo: newAttribute("date_3.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Date 3)
   * Display Form ID: date_3.aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("date_3.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Date 3)
   * Display Form ID: date_3.aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("date_3.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Date 3)
   * Display Form ID: date_3.aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("date_3.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Date 3)
 * Display Form ID: date_3.week.in.year
 */

export const Date3WeekSunSat = newAttribute("date_3.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date 3)
 * Display Form ID: date_3.week.in.quarter
 */

export const Date3WeekSunSatOfQtr = newAttribute("date_3.aaO81lMifn6q");
export const Date3WeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date 3)
   * Display Form ID: date_3.aa281lMifn6q
   */
  WeekNrYear: newAttribute("date_3.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Date 3)
   * Display Form ID: date_3.aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date_3.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Date 3)
   * Display Form ID: date_3.aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("date_3.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Date 3)
 * Display Form ID: date_3.euweek.in.year
 */

export const Date3WeekMonSun = newAttribute("date_3.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date 3)
 * Display Form ID: date_3.euweek.in.quarter
 */

export const Date3WeekMonSunOfQtr = newAttribute("date_3.abg81lMifn6q");
export const Date3Month = {
  /**
   * Display Form Title: Short (Jan) (Date 3)
   * Display Form ID: date_3.abm81lMifn6q
   */
  Short: newAttribute("date_3.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Date 3)
   * Display Form ID: date_3.abs81lMifn6q
   */
  ,
  Long: newAttribute("date_3.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Date 3)
   * Display Form ID: date_3.abq81lMifn6q
   */
  ,
  Number: newAttribute("date_3.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Date 3)
   * Display Form ID: date_3.abo81lMifn6q
   */
  ,
  MQ: newAttribute("date_3.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Date 3)
 * Display Form ID: date_3.month.in.quarter
 */

export const Date3MonthOfQuarter = newAttribute("date_3.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date 3)
 * Display Form ID: date_3.day.in.year
 */

export const Date3DayOfYear = newAttribute("date_3.abE81lMifn6q");
export const Date3DayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Date 3)
   * Display Form ID: date_3.abK81lMifn6q
   */
  Short: newAttribute("date_3.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Date 3)
   * Display Form ID: date_3.abO81lMifn6q
   */
  ,
  Long: newAttribute("date_3.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Date 3)
   * Display Form ID: date_3.abM81lMifn6q
   */
  ,
  Number: newAttribute("date_3.abM81lMifn6q")
};
export const Date3DayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Date 3)
   * Display Form ID: date_3.abU81lMifn6q
   */
  Short: newAttribute("date_3.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Date 3)
   * Display Form ID: date_3.abY81lMifn6q
   */
  ,
  Long: newAttribute("date_3.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Date 3)
   * Display Form ID: date_3.abW81lMifn6q
   */
  ,
  Number: newAttribute("date_3.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Date 3)
 * Display Form ID: date_3.day.in.quarter
 */

export const Date3DayOfQuarter = newAttribute("date_3.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date 3)
 * Display Form ID: date_3.day.in.month
 */

export const Date3DayOfMonth = newAttribute("date_3.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date 3)
 * Display Form ID: date_3.quarter
 */

export const Date3QuarterYear = newAttribute("date_3.aci81lMifn6q");
export const Date3MonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Date 3)
   * Display Form ID: date_3.act81lMifn6q
   */
  Short: newAttribute("date_3.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Date 3)
   * Display Form ID: date_3.acx81lMifn6q
   */
  ,
  Long: newAttribute("date_3.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Date 3)
   * Display Form ID: date_3.acv81lMifn6q
   */
  ,
  Number: newAttribute("date_3.acv81lMifn6q")
};
export const Date3Date = {
  /**
   * Display Form Title: mm/dd/yyyy (Date 3)
   * Display Form ID: date_3.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("date_3.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Date 3)
   * Display Form ID: date_3.date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("date_3.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Date 3)
   * Display Form ID: date_3.date.mdyy
   */
  ,
  MDYy: newAttribute("date_3.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Date 3)
   * Display Form ID: date_3.date.long
   */
  ,
  Long: newAttribute("date_3.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Date 3)
   * Display Form ID: date_3.date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("date_3.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Date 3)
   * Display Form ID: date_3.date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("date_3.date.eddmmyyyy")
};
/**
 * Attribute Title: Year (Date 4)
 * Display Form ID: date_4.year
 */

export const Date4Year = newAttribute("date_4.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date 4)
 * Display Form ID: date_4.quarter.in.year
 */

export const Date4Quarter = newAttribute("date_4.aam81lMifn6q");
export const Date4WeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date 4)
   * Display Form ID: date_4.aaA81lMifn6q
   */
  WeekNrYear: newAttribute("date_4.aaA81lMifn6q")
  /**
   * Display Form Title: Week Starting (Date 4)
   * Display Form ID: date_4.aaw81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date_4.aaw81lMifn6q")
  /**
   * Display Form Title: From - To (Date 4)
   * Display Form ID: date_4.aau81lMifn6q
   */
  ,
  FromTo: newAttribute("date_4.aau81lMifn6q")
  /**
   * Display Form Title: Week #/Year (Cont.) (Date 4)
   * Display Form ID: date_4.aay81lMifn6q
   */
  ,
  WeekNrYear_1: newAttribute("date_4.aay81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Date 4)
   * Display Form ID: date_4.aaC81lMifn6q
   */
  ,
  WkQtrYear: newAttribute("date_4.aaC81lMifn6q")
  /**
   * Display Form Title: Wk/Qtr/Year (Date 4)
   * Display Form ID: date_4.aas81lMifn6q
   */
  ,
  WkQtrYear_1: newAttribute("date_4.aas81lMifn6q")
};
/**
 * Attribute Title: Week (Sun-Sat) (Date 4)
 * Display Form ID: date_4.week.in.year
 */

export const Date4WeekSunSat = newAttribute("date_4.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date 4)
 * Display Form ID: date_4.week.in.quarter
 */

export const Date4WeekSunSatOfQtr = newAttribute("date_4.aaO81lMifn6q");
export const Date4WeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date 4)
   * Display Form ID: date_4.aa281lMifn6q
   */
  WeekNrYear: newAttribute("date_4.aa281lMifn6q")
  /**
   * Display Form Title: Week Starting (Date 4)
   * Display Form ID: date_4.aaY81lMifn6q
   */
  ,
  WeekStarting: newAttribute("date_4.aaY81lMifn6q")
  /**
   * Display Form Title: From - To (Date 4)
   * Display Form ID: date_4.aaW81lMifn6q
   */
  ,
  FromTo: newAttribute("date_4.aaW81lMifn6q")
};
/**
 * Attribute Title: Week (Mon-Sun) (Date 4)
 * Display Form ID: date_4.euweek.in.year
 */

export const Date4WeekMonSun = newAttribute("date_4.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date 4)
 * Display Form ID: date_4.euweek.in.quarter
 */

export const Date4WeekMonSunOfQtr = newAttribute("date_4.abg81lMifn6q");
export const Date4Month = {
  /**
   * Display Form Title: Short (Jan) (Date 4)
   * Display Form ID: date_4.abm81lMifn6q
   */
  Short: newAttribute("date_4.abm81lMifn6q")
  /**
   * Display Form Title: Long (January) (Date 4)
   * Display Form ID: date_4.abs81lMifn6q
   */
  ,
  Long: newAttribute("date_4.abs81lMifn6q")
  /**
   * Display Form Title: Number (M1) (Date 4)
   * Display Form ID: date_4.abq81lMifn6q
   */
  ,
  Number: newAttribute("date_4.abq81lMifn6q")
  /**
   * Display Form Title: M/Q (M1/Q1) (Date 4)
   * Display Form ID: date_4.abo81lMifn6q
   */
  ,
  MQ: newAttribute("date_4.abo81lMifn6q")
};
/**
 * Attribute Title: Month of Quarter (Date 4)
 * Display Form ID: date_4.month.in.quarter
 */

export const Date4MonthOfQuarter = newAttribute("date_4.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date 4)
 * Display Form ID: date_4.day.in.year
 */

export const Date4DayOfYear = newAttribute("date_4.abE81lMifn6q");
export const Date4DayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Date 4)
   * Display Form ID: date_4.abK81lMifn6q
   */
  Short: newAttribute("date_4.abK81lMifn6q")
  /**
   * Display Form Title: Long (Sunday) (Date 4)
   * Display Form ID: date_4.abO81lMifn6q
   */
  ,
  Long: newAttribute("date_4.abO81lMifn6q")
  /**
   * Display Form Title: Number (1=Sunday) (Date 4)
   * Display Form ID: date_4.abM81lMifn6q
   */
  ,
  Number: newAttribute("date_4.abM81lMifn6q")
};
export const Date4DayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Date 4)
   * Display Form ID: date_4.abU81lMifn6q
   */
  Short: newAttribute("date_4.abU81lMifn6q")
  /**
   * Display Form Title: Long (Monday) (Date 4)
   * Display Form ID: date_4.abY81lMifn6q
   */
  ,
  Long: newAttribute("date_4.abY81lMifn6q")
  /**
   * Display Form Title: Number (1=Monday) (Date 4)
   * Display Form ID: date_4.abW81lMifn6q
   */
  ,
  Number: newAttribute("date_4.abW81lMifn6q")
};
/**
 * Attribute Title: Day of Quarter (Date 4)
 * Display Form ID: date_4.day.in.quarter
 */

export const Date4DayOfQuarter = newAttribute("date_4.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date 4)
 * Display Form ID: date_4.day.in.month
 */

export const Date4DayOfMonth = newAttribute("date_4.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date 4)
 * Display Form ID: date_4.quarter
 */

export const Date4QuarterYear = newAttribute("date_4.aci81lMifn6q");
export const Date4MonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Date 4)
   * Display Form ID: date_4.act81lMifn6q
   */
  Short: newAttribute("date_4.act81lMifn6q")
  /**
   * Display Form Title: Long (January 2010) (Date 4)
   * Display Form ID: date_4.acx81lMifn6q
   */
  ,
  Long: newAttribute("date_4.acx81lMifn6q")
  /**
   * Display Form Title: Number (1/2010) (Date 4)
   * Display Form ID: date_4.acv81lMifn6q
   */
  ,
  Number: newAttribute("date_4.acv81lMifn6q")
};
export const Date4Date = {
  /**
   * Display Form Title: mm/dd/yyyy (Date 4)
   * Display Form ID: date_4.date.mmddyyyy
   */
  MmDdYyyy: newAttribute("date_4.date.mmddyyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Date 4)
   * Display Form ID: date_4.date.yyyymmdd
   */
  ,
  YyyyMmDd: newAttribute("date_4.date.yyyymmdd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Date 4)
   * Display Form ID: date_4.date.mdyy
   */
  ,
  MDYy: newAttribute("date_4.date.mdyy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Date 4)
   * Display Form ID: date_4.date.long
   */
  ,
  Long: newAttribute("date_4.date.long")
  /**
   * Display Form Title: dd/mm/yyyy (Date 4)
   * Display Form ID: date_4.date.ddmmyyyy
   */
  ,
  DdMmYyyy: newAttribute("date_4.date.ddmmyyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Date 4)
   * Display Form ID: date_4.date.eddmmyyyy
   */
  ,
  DdMmYyyy_1: newAttribute("date_4.date.eddmmyyyy")
};
export const Insights = {
  /**
   * Insight Title: Avg Entree %
   * Insight ID: abHVSjwFgk4i
   */
  AvgEntreePercent: "abHVSjwFgk4i"
  /**
   * Insight Title: Total Sales by City
   * Insight ID: acPWDTL2bJeX
   */
  ,
  TotalSalesByCity: "acPWDTL2bJeX"
  /**
   * Insight Title: Total Sales by Location Last Quarter
   * Insight ID: abmeiDsUhTNW
   */
  ,
  TotalSalesByLocationLastQuarter: "abmeiDsUhTNW"
  /**
   * Insight Title: Total Sales by Week
   * Insight ID: aeSCEMsTfoj8
   */
  ,
  TotalSalesByWeek: "aeSCEMsTfoj8"
  /**
   * Insight Title: $ Check Value by Trx
   * Insight ID: aa7N3HExdhKw
   */
  ,
  $CheckValueByTrx: "aa7N3HExdhKw"
  /**
   * Insight Title: $ Total Sales by Location
   * Insight ID: aaBN5UG3dXu4
   */
  ,
  $TotalSalesByLocation: "aaBN5UG3dXu4"
  /**
   * Insight Title: Sales over Time
   * Insight ID: acFJltTsifSQ
   */
  ,
  SalesOverTime: "acFJltTsifSQ"
  /**
   * Insight Title: Costs over Time
   * Insight ID: abHJmzD1fZrW
   */
  ,
  CostsOverTime: "abHJmzD1fZrW"
  /**
   * Insight Title: Labor Costs vs Scheduled Costs
   * Insight ID: abhJpedgcfU2
   */
  ,
  LaborCostsVsScheduledCosts: "abhJpedgcfU2"
  /**
   * Insight Title: Gross profit % (date filters)
   * Insight ID: acOfuc2QiDZK
   */
  ,
  GrossProfitPercentDateFilters: "acOfuc2QiDZK"
  /**
   * Insight Title: Table report Labor Costs Vs Scheduled Costs
   * Insight ID: aatFRvXBdilm
   */
  ,
  TableReportLaborCostsVsScheduledCosts: "aatFRvXBdilm"
  /**
   * Insight Title: Franchise Fees
   * Insight ID: aahnVeLugyFj
   */
  ,
  FranchiseFees: "aahnVeLugyFj"
  /**
   * Insight Title: Franchise Fees 2017
   * Insight ID: aaZWa46oh9cJ
   */
  ,
  FranchiseFees2017: "aaZWa46oh9cJ"
  /**
   * Insight Title: Too many datapoints
   * Insight ID: afgeutl8hfOe
   */
  ,
  TooManyDatapoints: "afgeutl8hfOe"
  /**
   * Insight Title: Test
   * Insight ID: ab6KtJ2LfmCV
   */
  ,
  Test: "ab6KtJ2LfmCV"
  /**
   * Insight Title: 123
   * Insight ID: ab3KtvTggKY5
   */
  ,
  _123: "ab3KtvTggKY5"
  /**
   * Insight Title: asdf
   * Insight ID: aepRx0i8haM7
   */
  ,
  Asdf: "aepRx0i8haM7"
  /**
   * Insight Title: too many data points
   * Insight ID: adzkfjmWiajP
   */
  ,
  TooManyDataPoints: "adzkfjmWiajP"
  /**
   * Insight Title: test-pzb
   * Insight ID: aa0wmZDugnUX
   */
  ,
  TestPzb: "aa0wmZDugnUX"
  /**
   * Insight Title: # Checks viewed by City stacked by Location
   * Insight ID: aby6oS6DbpFX
   */
  ,
  NrChecksViewedByCityStackedByLocation: "aby6oS6DbpFX"
  /**
   * Insight Title: Kyle's Insight
   * Insight ID: aazlme4wcy3O
   */
  ,
  KyleSInsight: "aazlme4wcy3O"
  /**
   * Insight Title: Gross Profit by location
   * Insight ID: ad4lhli5dn5v
   */
  ,
  GrossProfitByLocation: "ad4lhli5dn5v"
  /**
   * Insight Title: ui-example-1
   * Insight ID: aasloSSGgcAs
   */
  ,
  UiExample1: "aasloSSGgcAs"
  /**
   * Insight Title: DanielsFirstKPI
   * Insight ID: aaHloqmuf0Ea
   */
  ,
  DanielsFirstKPI: "aaHloqmuf0Ea"
  /**
   * Insight Title: states
   * Insight ID: aayloZPWhziV
   */
  ,
  States: "aayloZPWhziV"
  /**
   * Insight Title: Jakub's visualisation
   * Insight ID: abNloeB7iy4S
   */
  ,
  JakubSVisualisation: "abNloeB7iy4S"
  /**
   * Insight Title: sdf_restrant_per_city
   * Insight ID: aamlpUW9d6gc
   */
  ,
  SdfRestrantPerCity: "aamlpUW9d6gc"
  /**
   * Insight Title: fargo
   * Insight ID: acyllEgrhybI
   */
  ,
  Fargo: "acyllEgrhybI"
  /**
   * Insight Title: new_test
   * Insight ID: aeHmbn7Ciok6
   */
  ,
  NewTest: "aeHmbn7Ciok6"
  /**
   * Insight Title: Zajícův insight 2
   * Insight ID: abgprmHgf3uq
   */
  ,
  ZajCVInsight2: "abgprmHgf3uq"
  /**
   * Insight Title: previousPeriod
   * Insight ID: aaMNtrdagrFW
   */
  ,
  PreviousPeriod: "aaMNtrdagrFW"
  /**
   * Insight Title: Table to Pivot
   * Insight ID: aaYPSrp3bqyQ
   */
  ,
  TableToPivot: "aaYPSrp3bqyQ"
  /**
   * Insight Title: Table to Pivot #2
   * Insight ID: aaRUKANgdCex
   */
  ,
  TableToPivotNr2: "aaRUKANgdCex"
  /**
   * Insight Title: Table to Pivot #3
   * Insight ID: abdUSeYRfG4P
   */
  ,
  TableToPivotNr3: "abdUSeYRfG4P"
  /**
   * Insight Title: Bubble Chart
   * Insight ID: aa6D2HhshWHB
   */
  ,
  BubbleChart: "aa6D2HhshWHB"
  /**
   * Insight Title: hackathon
   * Insight ID: abxJEfZhfOk9
   */
  ,
  Hackathon: "abxJEfZhfOk9"
  /**
   * Insight Title: pie2
   * Insight ID: abcJGKsFhpp5
   */
  ,
  Pie2: "abcJGKsFhpp5"
  /**
   * Insight Title: Column Chart
   * Insight ID: acKLst3Faran
   */
  ,
  ColumnChart: "acKLst3Faran"
  /**
   * Insight Title: Dummy chart
   * Insight ID: abw8Uco2cT1B
   */
  ,
  DummyChart: "abw8Uco2cT1B"
  /**
   * Insight Title: test insight 1
   * Insight ID: ab68UlSRcNcP
   */
  ,
  TestInsight1: "ab68UlSRcNcP"
  /**
   * Insight Title: Pivot test
   * Insight ID: abIFNtySe2mv
   */
  ,
  PivotTest: "abIFNtySe2mv"
  /**
   * Insight Title: Table Without Measure
   * Insight ID: act2Khypdnz6
   */
  ,
  TableWithoutMeasure: "act2Khypdnz6"
  /**
   * Insight Title: asdfasdf
   * Insight ID: ab7CymgRcuDx
   */
  ,
  Asdfasdf: "ab7CymgRcuDx"
  /**
   * Insight Title: PivotTable sort over column attribute TEST
   * Insight ID: ackXHPqtheSt
   */
  ,
  PivotTableSortOverColumnAttributeTEST: "ackXHPqtheSt"
  /**
   * Insight Title: Table Totals test
   * Insight ID: abS3P51kcXLN
   */
  ,
  TableTotalsTest: "abS3P51kcXLN"
  /**
   * Insight Title: scatter example x
   * Insight ID: aaIfYMhViEjv
   */
  ,
  ScatterExampleX: "aaIfYMhViEjv"
  /**
   * Insight Title: xxx
   * Insight ID: abtwQrxcfOvC
   */
  ,
  Xxx: "abtwQrxcfOvC"
  /**
   * Insight Title: Line Chart
   * Insight ID: aaAaDFt4c1yC
   */
  ,
  LineChart: "aaAaDFt4c1yC"
  /**
   * Insight Title: Scatter Chart
   * Insight ID: ab4aHg6lej5e
   */
  ,
  ScatterChart: "ab4aHg6lej5e"
  /**
   * Insight Title: Area Chart
   * Insight ID: acCaGDIrc1iU
   */
  ,
  AreaChart: "acCaGDIrc1iU"
  /**
   * Insight Title: Headline Chart
   * Insight ID: aaiaOcMqbyMj
   */
  ,
  HeadlineChart: "aaiaOcMqbyMj"
  /**
   * Insight Title: Bubble Chart
   * Insight ID: abNaJG2Aed2M
   */
  ,
  BubbleChart_1: "abNaJG2Aed2M"
  /**
   * Insight Title: Pie Chart
   * Insight ID: aaraOcrmdjZd
   */
  ,
  PieChart: "aaraOcrmdjZd"
  /**
   * Insight Title: Donut Chart
   * Insight ID: absaJEALgcdO
   */
  ,
  DonutChart: "absaJEALgcdO"
  /**
   * Insight Title: Treemap Chart
   * Insight ID: aajaObFleXdD
   */
  ,
  TreemapChart: "aajaObFleXdD"
  /**
   * Insight Title: Heatmap Chart
   * Insight ID: abkaJfMYiiCU
   */
  ,
  HeatmapChart: "abkaJfMYiiCU"
  /**
   * Insight Title: Bar Chart
   * Insight ID: aaKaMZUJeyGo
   */
  ,
  BarChart: "aaKaMZUJeyGo"
  /**
   * Insight Title: yxcv
   * Insight ID: acGEkojJhJdr
   */
  ,
  Yxcv: "acGEkojJhJdr"
  /**
   * Insight Title: ColumnsChart
   * Insight ID: aabOspdLbbvs
   */
  ,
  ColumnsChart: "aabOspdLbbvs"
  /**
   * Insight Title: # Checks by Quarter, State
   * Insight ID: aaW7hwvlfq8Q
   */
  ,
  NrChecksByQuarterState: "aaW7hwvlfq8Q"
  /**
   * Insight Title: e
   * Insight ID: ab3sK1TAhDEl
   */
  ,
  E: "ab3sK1TAhDEl"
  /**
   * Insight Title: TOTVS Table
   * Insight ID: aesum6Klg3Pg
   */
  ,
  TOTVSTable: "aesum6Klg3Pg"
  /**
   * Insight Title: tesst date year
   * Insight ID: aa37yWEJaZgJ
   */
  ,
  TesstDateYear: "aa37yWEJaZgJ"
  /**
   * Insight Title: pivotka
   * Insight ID: abOGucCbbjYU
   */
  ,
  Pivotka: "abOGucCbbjYU"
  /**
   * Insight Title: PivotTable with no filters
   * Insight ID: abEGARwMcKcp
   */
  ,
  PivotTableWithNoFilters: "abEGARwMcKcp"
  /**
   * Insight Title: TOTVS Table #2
   * Insight ID: aattqR1TePqz
   */
  ,
  TOTVSTableNr2: "aattqR1TePqz"
  /**
   * Insight Title: tetsssss1
   * Insight ID: abr6SUUDg4J3
   */
  ,
  Tetsssss1: "abr6SUUDg4J3"
  /**
   * Insight Title: coreui-react
   * Insight ID: aaSMTErxgsQZ
   */
  ,
  CoreuiReact: "aaSMTErxgsQZ"
  /**
   * Insight Title: JZA Treemap
   * Insight ID: aaGJHukYh43y
   */
  ,
  JZATreemap: "aaGJHukYh43y"
  /**
   * Insight Title: JZA Combo
   * Insight ID: aaTJJW6adsaj
   */
  ,
  JZACombo: "aaTJJW6adsaj"
  /**
   * Insight Title: JZA Pivot Example
   * Insight ID: aaVk0eDhiiyr
   */
  ,
  JZAPivotExample: "aaVk0eDhiiyr"
  /**
   * Insight Title: Dual Axis Bar Chart
   * Insight ID: acSoPx4Mc7Rr
   */
  ,
  DualAxisBarChart: "acSoPx4Mc7Rr"
  /**
   * Insight Title: Checks by year
   * Insight ID: accyE4bMhKhb
   */
  ,
  ChecksByYear: "accyE4bMhKhb"
  /**
   * Insight Title: Checks by State
   * Insight ID: ad0CPFd0eIAV
   */
  ,
  ChecksByState: "ad0CPFd0eIAV"
  /**
   * Insight Title: DEL
   * Insight ID: aaXC6TWlfQTa
   */
  ,
  DEL: "aaXC6TWlfQTa"
  /**
   * Insight Title: DEL
   * Insight ID: aagDshJTagXX
   */
  ,
  DEL_1: "aagDshJTagXX"
  /**
   * Insight Title: Long Table
   * Insight ID: aaDKNE91d2wl
   */
  ,
  LongTable: "aaDKNE91d2wl"
  /**
   * Insight Title: test
   * Insight ID: abg7q7o6dYNx
   */
  ,
  Test_1: "abg7q7o6dYNx"
  /**
   * Insight Title: DHO-test
   * Insight ID: abtZxLkZfrFD
   */
  ,
  DHOTest: "abtZxLkZfrFD"
  /**
   * Insight Title: KPI
   * Insight ID: aa5gPlRleK93
   */
  ,
  KPI: "aa5gPlRleK93"
  /**
   * Insight Title: PVA
   * Insight ID: abCiWPjZbXVS
   */
  ,
  PVA: "abCiWPjZbXVS"
  /**
   * Insight Title: PVA 2
   * Insight ID: aaCi3GfNaV6Y
   */
  ,
  PVA2: "aaCi3GfNaV6Y"
  /**
   * Insight Title: Table
   * Insight ID: aaimzjiVfWkM
   */
  ,
  Table: "aaimzjiVfWkM"
  /**
   * Insight Title: Test Chart #1
   * Insight ID: aa4ESTLYiu6X
   */
  ,
  TestChartNr1: "aa4ESTLYiu6X"
  /**
   * Insight Title: Table
   * Insight ID: acN7DuCPiDoh
   */
  ,
  Table_1: "acN7DuCPiDoh"
  /**
   * Insight Title: Chart #1
   * Insight ID: admoLzGrddbk
   */
  ,
  ChartNr1: "admoLzGrddbk"
  /**
   * Insight Title: geoPushpinChart
   * Insight ID: acebcI3fhaRI
   */
  ,
  GeoPushpinChart: "acebcI3fhaRI"
  /**
   * Insight Title: bullet
   * Insight ID: aaQxY4PLbBsQ
   */
  ,
  Bullet: "aaQxY4PLbBsQ"
  /**
   * Insight Title: Measure Value Filter Column Chart
   * Insight ID: aapcLmQzeIAz
   */
  ,
  MeasureValueFilterColumnChart: "aapcLmQzeIAz"
  /**
   * Insight Title: Measure Value Filter treat null values as 0
   * Insight ID: ab8GBmYngtMa
   */
  ,
  MeasureValueFilterTreatNullValuesAs0: "ab8GBmYngtMa"
  /**
   * Insight Title: VisualBI #1
   * Insight ID: aazG5vCZbY25
   */
  ,
  VisualBINr1: "aazG5vCZbY25"
  /**
   * Insight Title: Pivot insight
   * Insight ID: ab1Kx7lUaHvU
   */
  ,
  PivotInsight: "ab1Kx7lUaHvU"
  /**
   * Insight Title: yxcv
   * Insight ID: abSTN5NZh4xW
   */
  ,
  Yxcv_1: "abSTN5NZh4xW"
  /**
   * Insight Title: Dual
   * Insight ID: aaiiYGtUims2
   */
  ,
  Dual: "aaiiYGtUims2"
  /**
   * Insight Title: Test #1
   * Insight ID: aasWddUAawmK
   */
  ,
  TestNr1: "aasWddUAawmK"
  /**
   * Insight Title: Tets #111
   * Insight ID: ablreDhFdKwH
   */
  ,
  TetsNr111: "ablreDhFdKwH"
};