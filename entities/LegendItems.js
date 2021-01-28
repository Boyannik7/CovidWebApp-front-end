import LegendItem from "./LengendItem";

var legendItems = [
  new LegendItem(
    "1,000,000 +",
    "#1C0604",
    (cases) => cases >= 1_000_000,
    "white"
  ),

  new LegendItem(
    "500,000 - 999,999",
    "#8A1B0F",
    (cases) => cases >= 500_000 && cases < 1_000_000,
    "White"
  ),

  new LegendItem(
    "200,000 - 499,999",
    "#DE4F1F",
    (cases) => cases >= 200_000 && cases < 500_000
  ),

  new LegendItem(
    "50,000 - 199,999",
    "#DE771F",
    (cases) => cases >= 50_000 && cases < 200_000
  ),

  new LegendItem(
    "0 - 49,999",
    "#DED51F",
    (cases) => cases > 0 && cases < 50_000
  ),

  new LegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;

/**
 * 7 > 1 million                        #1C0604
 * 6 >= 500 thousand < 1 million        #8A1B0F
 * 5 >= 200 thousand < 500 thousand     #DE4F1F
 * 4 >= 100 thousand  < 200 Thousand    #DE771F
 * 3 > 50 thousand < 100 thousand       #DE981F
 * 2 >= 0 < 50 thousand                 #DED51F
 * 1 NO DATA                            #ffffff
 */

/*

#741f1f // Really red
#9c2929 // more red
#c57f7f // red
#d8aaaa //more pink
#ebd4d4 //pink
#ffffff //white
*/
