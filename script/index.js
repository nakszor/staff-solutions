import { API } from "./Api.js";
import { DOM } from "./DOM.js";

const partners = await API.getPartners()
 
DOM.ShowPartners(partners)

const selectPartners = document.getElementById('select-partners')

class listPartnersName {
    static ShowName(arr){
        let options = []
        arr.forEach(element => {
            if (!options.includes(element.sectors.description)){
            options.push(element.sectors.description)
            const partner = document.createElement("option")
            partner.innerHTML = element.sectors.description
            partner.value = element.sectors.description
            selectPartners.appendChild(partner)
            }
        })
    }
}
listPartnersName.ShowName(partners)

selectPartners.addEventListener('change', () => {
  const save = partners.filter(element => element.sectors.description === selectPartners.value)
  DOM.ShowPartners(save)
  if(selectPartners.value === 'Todas'){
    DOM.ShowPartners(partners)
  }
})