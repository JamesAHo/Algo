/*This problem shares some similarities with A2, with key differences in bold.
Problem solving skills are applicable to many daily musings. For instance, you might ponder over shared birthdays, bird houses, mapmaking, or ordering an exact number of chicken nuggets. Naturally, another great question to ponder is: how many deckers of a cheeseburger you could build if you spent your entire salary on fast food!
Specifically, you're interested in building a 
�
K-decker cheeseburger, which alternates between buns, cheese, and patty starting and ending with a bun. You've already bought 
�
S single cheeseburgers and 
�
D double cheeseburgers. Each provides you with two buns, though a single provides one patty and one cheese, while a double provides two patties and two cheese. */

const can_build_decker = (S,D,K) =>{
    let total_buns = 2 * (S + D);
    let total_patties = S + 2 * D
    let total_cheese = S + 2 * D
    return total_buns >= 2 * K && total_patties >= K && total_cheese >= K ? "YES" : "No"
}   
export default function main(){
    
}