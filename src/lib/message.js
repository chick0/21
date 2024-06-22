import Swal from "sweetalert2"

export function gameBust() {
    return Swal.fire({
        title: "Bust",
        icon: "warning",
        timer: 3000,
        timerProgressBar: true,
    })
}

export function gameWin() {
    return Swal.fire({
        title: "YOU WIN",
        icon: "success",
        timer: 5000,
        timerProgressBar: true,
    })
}

export function gameLose() {
    return Swal.fire({
        title: "YOU LOSE",
        icon: "error",
        timer: 5000,
        timerProgressBar: true,
    })
}

export function gameDraw() {
    return Swal.fire({
        title: "DRAW",
        icon: "info",
        timer: 5000,
        timerProgressBar: true,
    })
}
