import hyRequest from "@/service";

function getBanner() {
    return hyRequest.get({
        url: "/banner"
    })
}

export { getBanner }
