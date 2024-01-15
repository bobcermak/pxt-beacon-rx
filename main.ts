let randomNumber:number
let actualNumber:number
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7) //0...7
radio.setGroup(164)  //0....255 = komu je tato zpráva určena, ale všichni slyší, MUSÍ BÝT STEJNÉ
                   //0....83 = skupiny radia(FREKVENCE), jako místnosti



input.onButtonPressed(Button.A, function() {
    randomNumber = randint(1,20)
    radio.sendNumber(randomNumber)
    whaleysans.showNumber(randomNumber)

})


input.onButtonPressed(Button.B, function() {
    
    radio.sendString("Ses az moc velky")

})


input.onButtonPressed(Button.AB, function() {
    
    radio.sendValue("Víťa", 85)
    radio.sendValue("Bop", 55)

})




radio.onReceivedNumber(function(receivedNumber: number) {   //receivedNumber = musíme poté zobrazovat, je to odeslané číslo, od odesílatele
    whaleysans.showNumber(receivedNumber)
})



radio.onReceivedString(function(receivedString: string) {
    
})


radio.onReceivedValue(function(name: string, value: number) {
    let serial:number = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    if(serial === 162048183){
        basic.showString(name)
        whaleysans.showNumber(value)
    }
})



input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    basic.showNumber(control.deviceSerialNumber())
})

