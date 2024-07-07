module.exports = {
    bot: {
        token: "", //botun tokeni
        prefix: ".", //botun prefixi
        mongoDb: "", //MongoDB Url. Youtubede araştırarak nasıl alınacagını öürenebilirsiniz
        owners: ["owner-id-1"]
    },
    coinflip: {
        coinFlipMax: 250000, //Coinflip en fazla oynayabilecekleri para
    },
    meslek: {
        CumhurbaşkanıMaas: 50000, //Cumhurbaşkanı Maaşı
        BaşbakanMaas: 25000, //Başbakan maaşı
        BaşbakanyardımcısıMaas: 20000, //Başbakan Yardımcısı maaşı                                                                                                                                                                        
    },
    daily: {
        min: 1000, //Günlük Ödül minimum gelecek para
        max: 10000, //Günlük Ödül maximum gelecek para
    },
}
