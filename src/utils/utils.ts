
import {getNode} from '@formkit/core'

export const checkValidInput = (inputs : string[]) => {
    let ok = true
    inputs.map(el => {
        const node = getNode(el)
        if(node?.context?.state.valid === false) ok = false
    })
    if (ok) return true
    else return false
}
