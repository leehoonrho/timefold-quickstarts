
var chart_bestScoreProblemStatisticChart1_3a445 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_3a445'), {
    type: 'line',
    data: {
        labels: [
            2883, 2884, 3215, 3258, 3279, 3333, 3342, 3462, 3611, 3780, 3940, 4092, 4260, 4426, 4531, 4580, 4818, 4980, 5292, 5437, 5752, 6209, 6644, 6807, 6957, 7031, 7116, 7258, 7286, 7416, 7572, 7732, 7888, 8253, 8403, 8693, 8837, 8995, 9754, 9906, 10062, 10369, 10695, 10977, 11127, 11420, 11566, 11714, 11853, 12166, 12611, 12753, 13239, 13399, 13723, 13872, 14016, 14173, 14353, 14664, 14958, 15060, 15242, 16137, 16278, 16433, 16882, 17200, 17355, 17505, 17659, 17814, 17959, 18326, 18569, 18868, 19086, 19168, 20299, 20941, 21411, 22191, 22663, 23541, 23699, 23854, 24030, 24778, 24948, 25081, 25392, 25423, 25424, 25692, 25693, 25731, 25732, 25733, 25839, 25981, 26043, 26044, 26045, 26290, 26448, 26599, 27061, 27628, 27659, 27808, 28723, 28954, 29019, 29173, 29375, 29376, 29662, 29744, 29785, 29810, 29811, 29812, 30228, 30372, 30524, 30559, 30560, 30881, 31140, 31154, 31155, 31465, 31744, 31801, 32230, 32686, 32991, 33033, 33096, 33099, 33630, 33631, 33891, 34042, 34196, 34302, 34494, 34802, 34951, 34952, 34954, 35004, 35018, 35118, 35425, 35615, 35616, 35834, 35874, 35894, 35896, 35897, 36040, 36559, 36674, 36937, 36938, 36939, 37275, 37753, 37902, 38168, 38169, 38196, 38282, 38284, 38285, 38527, 38755, 38756, 39225, 39289, 39389, 39390, 39566, 39567, 39568, 39587, 39588, 40182, 40323, 40868, 41044, 41253, 41287, 41288, 41321, 41402, 41484, 41623, 41861, 41863, 42219, 42240, 42241, 42381, 42382, 42383, 42618, 42619, 42620, 43287, 43593, 43919, 43982, 43993, 43994, 43995, 44001, 44194, 44293, 44645, 44678, 44680, 44681, 45027, 45679, 45699, 45961, 46250, 46361, 46963, 46965, 47019, 47021, 47119, 47255, 47353, 47354, 47389, 47390, 47391, 47541, 48065, 48066, 48274, 48657, 48658, 48700, 49303, 49451, 49781, 49847, 49849, 50019, 50166, 50483, 50484, 50641, 50759, 50803, 50878, 51053, 51224, 51490, 51537, 51908, 51909, 52077, 52227, 52513, 52597, 52652, 52936, 53229, 53394, 53435, 53536, 53969, 54111, 54511, 55233, 55238, 55867, 56422, 56719, 56777, 57015, 57165, 57628, 58087, 58088, 58090, 58316, 58484, 58485, 59351, 59363, 59850, 60261, 60738, 61292, 62097, 62256, 62609, 62937, 62938, 63054, 63196, 63286, 63287, 63288, 63289, 63679, 64084, 64368, 64518, 64839, 65518, 66127, 66280, 66281, 66468, 66540, 66542, 66749, 67183, 67768, 68107, 68185, 68223, 68668, 68802, 68803, 68930, 68972, 69450, 69694, 70332, 70732, 71027, 71028, 71029, 71422, 71424, 71452, 72671, 73513, 73678, 73899, 74008, 74413, 74414, 74434, 74501, 74935, 75315, 75553, 76634, 76724, 77260, 77633, 77786, 78107, 78108, 78545, 78650, 78889, 79258, 79352, 79659, 79769, 79792, 79813, 79915, 80042, 80242, 80277, 80364, 80366, 81299, 81605, 81719, 81720, 81721, 81787, 82169, 82254, 82317, 82582, 82662, 82663, 82740, 83196, 83339, 83547, 83563, 83778, 84084, 84355, 84380, 84514, 84800, 85006, 85405, 85455, 85776, 85819, 85863, 86777, 87045, 87179, 87272, 87311, 87720, 87721, 88055, 88909, 89060, 89229, 89608, 90376, 90682, 90712, 91706, 92017, 92101, 92304, 92576, 92586, 92587, 92619, 92731, 92756, 93062, 93073, 93102, 93104, 93175, 93224, 93225, 93226, 93685, 93686, 93687, 94062, 94176, 94185, 94225, 96046, 96133, 96141, 96489, 96630, 96633, 96789, 96912, 97137, 97969, 97970, 98459, 98477, 98483, 99151, 99314, 99474, 99475, 99599, 99662, 99940, 100011, 100494, 101610, 101649, 101938, 102073, 102248, 102577, 102617, 103131, 103320, 103769, 104170, 105246, 105423, 105688, 105689, 105757, 105896, 106425, 106563, 107359, 107896, 108934, 108982, 109441, 110018, 110022, 110346, 110482, 112629, 112630, 112631, 112707, 113185, 113778, 113784, 113907, 114011, 114320, 114905, 114906, 116941, 117089, 117398, 117433, 117462, 117623, 118519, 118526, 118623, 118745, 119629, 119699, 120303, 121145, 121428, 121710, 121826, 121827, 122315, 122316, 122811, 122990, 123053, 123243, 123374, 123375, 123445, 123937, 123940, 124601, 125074, 126149, 126354, 126507, 126537, 126538, 126764, 127100, 128200, 128293, 128368, 129431, 129521, 129522, 129523, 130444, 130656, 131255, 131256, 131894, 132481, 132617, 133029, 133452, 133508, 133580, 134088, 134425, 134638, 134639, 134652, 134716, 134864, 135265, 135267, 135819, 135878, 136339, 136352, 136916, 136917, 137389, 137390, 137391, 137677, 138718, 140757, 141339, 141471, 141622, 142582, 142846, 142847, 145738, 146706, 146707, 147371, 148258, 148609, 149988, 150330, 152131, 152552, 152741, 153142, 153550, 153617, 153637, 154264, 154325, 154544, 154791, 154792, 155409, 155410, 155522, 156635, 157025, 157255, 157259, 157260, 158005, 158006, 158007, 158324, 158942, 159244, 159245, 159636, 160290, 160501, 160502, 161163, 161615, 162451, 163096, 163097, 163195, 163226, 163811, 163842, 164445, 164446, 164868, 165119, 165120, 166695, 166844, 167859, 167878, 167992, 167994, 168722, 168723, 168726, 168728, 169463, 170906, 171025, 173720, 173958, 174163, 174251, 174488, 174873, 175789, 176091, 176703, 177849, 178200, 178328, 178491, 178550, 178632, 178916, 178917, 179197, 179358, 179697, 179704, 179956, 180109, 180254, 180418, 180844, 181044, 181045, 181156, 181157, 181734, 181882, 182921, 183628, 183664, 184025, 184027, 184383, 185065, 185385, 185388, 186538, 186834, 187529, 188259, 189947, 190319, 191219, 191222, 192046, 192777, 193203, 193542, 194511, 194688, 195393, 196067, 196689, 197394, 197449, 197732, 197833, 198143, 198871, 199041, 199164, 199638, 199867, 199869, 200264, 200265, 200397, 200842, 201400, 201401, 202123, 202124, 202184, 203738, 203931, 204389, 205139, 205278, 205880, 205902, 206958, 207969, 208802, 209220, 209595, 209768, 209916, 210507, 210525, 210526, 210740, 211494, 211495, 212149, 212463, 213077, 213078, 214702, 215527, 216331, 216456, 217074, 217176, 217325, 220105, 220472, 221859, 221863, 221864, 222600, 222601, 222877, 224169, 224197, 225373, 225719, 226835, 227242, 227248, 227533, 227611, 227612, 227613, 229154, 230126, 230293, 231096, 231416, 231417, 231640, 233118, 233966, 233969, 233970, 236169, 236177, 236179, 237036, 238065, 238620, 240178, 240962, 242273, 244094, 244954, 245051, 245259, 245821, 245933, 246716, 246717, 247090, 247594, 248484, 248671, 249170, 249377, 250132, 252328, 253152, 253721, 253740, 255423, 256298, 257195, 257239, 258947, 259757, 260053, 261735, 262602, 262603, 262910, 264071, 264072, 264073, 264102, 265192, 265721, 266529, 267418, 267500, 269038, 269990, 270289, 271330, 271628, 272358, 274457, 274958, 274959, 276292, 277132, 277667, 278045, 278452, 279307, 279694, 279695, 280456, 282437, 282970, 283200, 283206, 283207, 283245, 284137, 284360, 284697, 286304, 286658, 289337, 290878, 292386, 292703, 293899, 294632, 294633, 294963, 295416, 296187, 296188, 296853, 296913, 297649, 299649, 299680, 300000
        ],
        datasets: [
            {
                  label: 'First Fit',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -10767, -10767, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'First Fit Decreasing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -27286, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'Weakest Fit Decreasing',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -27297, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 
                  ]
                }, 
{
                  label: 'Tabu Search',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -27297, , , -25142, -25121, -12331, -9994, -9994, -9814, -9809, , -9763, -9758, -9733, -9732, -9730, -9729, -9728, -9727, -9719, -9717, , -9716, -9712, , -9711, -9695, -9690, -9680, -9669, -9630, -9611, -9599, -9598, -9590, -9512, -9511, -9493, -9492, -9491, -9489, -9481, -9479, -9478, -9477, -9475, -9473, -9464, -9461, -9460, -9445, -9440, -9439, -9438, -9437, -9432, -9431, , -9426, -9422, -9421, -9418, -9414, -9412, -9411, -9409, -9406, -9405, -9404, , -9400, -9386, , -9385, -9384, -9378, -9374, -9373, -9372, -9366, -9365, -9363, -9361, -9360, , -9359, -9358, , , , , , , , -9338, , , , , -9337, -9332, -9329, -9323, , -9321, -9320, -9319, , -9318, -9317, , , , , -9313, , , , -9312, -9285, -9283, , , , , , , , -9282, , -9281, -9279, -9278, , , , , , -9277, -9276, -9273, , -9271, -9270, , , , , , -9265, -9263, , , , -9257, , , , -9255, , -9254, , , , , -9250, -9249, , , -9248, , , , -9239, , , , -9231, , , , , , , , -9228, -9226, , -9225, , , , -9224, , , -9223, , , , , , , , -9220, , , , , , , , , , , , -9215, , -9210, , , , , -9209, , -9208, -9200, , , , , , -9199, -9198, , , , , , -9195, , , -9193, , , -9192, -9188, -9187, , , , -9184, -9182, , , , -9181, , , , , -9178, , , , -9175, -9174, -9168, , -9166, -9165, , -9161, , -9159, , -9158, , , , , , -9157, , , -9156, , , , , -9155, , , , -9154, , , , -9153, , , -9152, , , -9151, , , , , , , -9150, -9148, -9146, -9145, , , , , -9144, , , -9143, -9140, -9138, , , , -9135, , , , -9134, , , , , , , , , , -9133, , -9130, -9129, , , , , -9127, , , , , -9126, , , -9121, -9120, , , , -9119, , , , -9118, , , -9116, , , , -9115, , , -9114, -9109, , , , , , , , , , , -9105, -9103, -9100, , , -9099, -9097, , -9096, -9089, -9088, , -9083, , , , -9082, , , -9081, , -9080, , , -9079, -9077, -9076, -9075, , , -9074, , -9073, -9068, , -9067, , , , , -9066, , , , , , -9063, , , , , , , -9060, , , , -9058, , , , , , , -9057, , , , -9056, , , , -9055, , , -9050, , , , -9046, , , -9045, , , , , , -9044, -9038, , , , , , , , -9033, -9032, , , , , -9028, , , -9025, -9024, , , , , , , , , , , , , , , , , , , , , , , , , , , -9022, -9021, , , , , , , , , , , , , , -9020, , , -9018, -9016, , , , , , , -9015, , , , -9013, -9012, , , , -9011, , -9010, , , -9007, , , -9006, , , , -9005, -9004, , , , , -9002, , , , , , , -9001, -9000, -8999, -8995, , -8977, , , , -8976, , , , -8971, , , , -8970, , -8969, , , , , , , , , , , , , , , , , , , , , -8967, -8966, , , , -8965, , , , -8963, , , , , -8958, -8954, , , , -8952, , , -8950, -8949, , -8948, , , , , , , , , -8947, -8945, , -8944, , , , -8943, , -8942, , , -8941, -8938, , -8937, , , , -8935, , , -8934, -8932, -8928, , -8923, , , , , -8922, -8921, , , -8920, , , , , , , -8917, -8916, , , , -8912, , , , , , , , , , , , -8908, , , -8906, , -8905, , , -8904, , , , , -8900, -8898, , , , , -8897, , -8896, -8895, , -8893, , , , -8892, , , , -8891, -8890, -8885, , , , , , -8880, -8875, , , , , , -8874, , -8873, -8872, , -8867, , , , , , -8854, , -8849, -8846, , , , , -8841, , , , -8836, , -8835, , , , , , , , , , , , , -8830, , , -8829, -8828, , , , , , , , , -8827, , , -8826, , , -8822, -8821, , , , , , , -8820, , , , , , , -8819, , , , , , , , , -8816, , , -8814, -8808, -8806, , -8805, , , , , , , , , , , , , -8804, , , , , , , , , -8803, , , , , , , , , , , , , , , -8799, , -8799
                  ]
                }, 
{
                  label: 'Late Acceptance (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -27297, -25142, , , , , , , , , , , -13639, , , , , , , , , , , -25711, , , -78852, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -54176, , , , , , , , , , , , -41499, , , -41342, , , , , , , , , , , , -40847, , , -40598, -40412, -39887, -39762, -38589, -38319, -38303, , -38201, -35587, -35311, -34836, , , , , -34639, , , , -34032, , , -33985, -33967, -33917, -33913, , -33131, -33102, -32063, , , , -31856, -31812, -31594, -31472, -31308, -31304, -31138, , -30756, , , , -30595, -30108, -30103, -29941, -29721, , , , -29499, , , -29472, -29330, -29197, -29109, -28716, , , -28670, -28645, -28529, , -28493, -28395, -28130, , -28045, , -27838, -27836, -27785, -27734, , , -27727, -27593, , -27569, -27549, -27547, , -27428, -27338, -27315, , -27220, -27219, -27053, -27026, -26980, -26829, -26572, , , -26327, , -26305, -26259, -26255, , -26231, -26228, , -26146, -26116, -26107, -26013, -25997, -25926, -25840, -25829, -25656, -25651, -25579, -25556, -25490, -25363, -25295, -25291, -25244, -25220, -25198, , -25134, , -24953, -24947, -24883, -24601, , -24458, , , -24331, -24308, -24258, -24111, -24052, , , -23945, -23940, -23921, -23881, -23876, , -23778, -23751, , -23521, -23514, , , , -23449, -23446, -23444, , , -23443, -23361, -23330, , -23237, -23234, -23040, -23011, , -22977, -22877, -22861, , , , -22853, , , -22834, , -22656, , -22537, , -22395, -22369, -22222, -22195, -22107, , -22106, -22093, , -21892, -21871, -21870, -21840, , -21711, -21709, -21584, , -21571, -21452, -21316, , -21295, -21233, , -21181, -21170, , -21118, -21097, -21047, -21040, -20903, -20849, , , , , -20837, -20833, -20818, -20809, , -20732, -20547, , , , -20545, -20544, -20473, , -20459, -20454, -20443, , -20355, -20313, -20238, -20231, -20087, -20086, -20068, -20053, -20025, , -19970, , , -19967, -19925, -19911, -19902, , -19815, -19776, -19774, -19656, , -19609, -19593, , , -19557, -19500, -19484, , -19461, -19453, -19438, , -19416, -19403, , -19384, -19364, -19360, , -19359, -19238, , , -19230, -19229, -19197, -19195, -19194, -19170, -19169, -19105, -19067, -19065, , , , -19061, -18980, , , -18903, , , , -18872, , -18870, -18786, -18784, , -18775, -18761, , -18758, , -18699, -18532, , , , , -18516, -18511, , -18483, , , -18454, , -18437, -18436, -18435, -18417, , -18403, -18400, -18396, -18383, -18373, , -18356, -18332, -18329, -18323, -18299, -18263, , -18258, -18160, -18154, , -18144, -18143, -18142, -18135, -18133, -18126, , -18070, -18063, -18049, , -18029, -18013, -18003, , -17996, -17973, , -17916, -17907, -17900, , -17897, -17857, , -17854, -17836, -17827, -17775, -17740, , , -17697, -17690, -17689, -17678, -17673, -17664, -17550, , , -17532, -17500, -17487, -17445, , -17415, -17390, , , -17389, -17376, -17372, -17346, -17339, -17336, -17333, -17309, -17242, -17233, -17217, -17170, -17167, -17152, -17151, -17149, -17134, -17126, -17104, -17089, -17085, -17022, -17016, -16970, -16940, -16933, , , -16931, -16878, -16871, -16865, -16849, -16844, -16841, -16828, -16809, -16808, -16769, -16757, -16747, , -16722, -16718, , , -16717, -16680, -16665, -16648, -16623, -16603, , -16579, -16504, -16455, , , -16443, -16439, -16430, , -16420, , -16419, -16393, , -16373, -16370, , -16358, -16353, -16327, , , -16310, -16272, -16265, -16257, , -16241, -16237, -16216, -16200, -16187, -16121, , , , , -16095, , -16087, -16003, -15950, , -15947, -15917, -15872, , -15870, -15868, -15788, , -15772, , -15757, -15746, -15744, -15726, -15724, -15713, -15699, -15698, -15689, -15675, -15654, -15633, -15632, -15631, -15630, -15621, -15594, -15582, -15579, -15574, , , -15573, -15543, -15531, , -15501, -15498, -15491, , -15439, -15435, -15428, -15416, , , -15411, -15403, -15393, , -15385, -15320, , , -15315, , -15304, -15287, -15283, -15278, -15268, -15267, -15264, -15219, , , -15213, , -15204, -15190, -15143, , -15129, , -15122, -15115, , , -15111, , -15103, -15083, -15078, , -15072, -15071, , , , -15061, , -15055, -15042, -15036, -15026, , , -15020, -15017, , -15013, -15007, -14967, -14963, -14947, -14927, , , -14916, -14888, -14879, , -14873, -14864, -14836, -14834, -14831, -14820, -14817, -14814, -14806, -14804, -14778, , -14772, -14763, , -14739, , -14734, -14728, , -14718, -14714, -14679, -14678, , , -14672, -14663, -14655, -14640, , -14616, , , -14612, , -14600, -14572, -14557, , -14553, -14545, -14519, , , , -14500, -14489, -14464, -14454, -14423, , , -14416, -14401, -14393, -14381, -14377, , -14355, , , -14349, , -14345, -14341, -14338, -14312, -14304, , -14289, , , -14262, -14253, -14250, -14238, , -14228, -14208, -14204, , -14195, , -14194, -14193, -14190, -14164, -14162, -14149, -14141, -14119, -14116, -14112, -14103, -14086, , -14050, -14022, , , -14016, -14004, -14002, -14000, -13997, -13987, -13976, -13966, , -13958, -13946, , -13942, -13917, , , -13913, -13906, -13878, -13870, -13829, -13828, , -13820, -13809, -13806, -13801, -13791, -13787, , -13783, -13782, -13774, -13755, -13751, -13719, -13717, -13698, , -13659, -13625, , , , -13595, , -13592, -13576, -13575, -13572, -13568, -13556, -13530, -13527, -13509, -13505, -13501, -13496, , -13494, -13490, -13485, -13462, -13458, -13457, -13439, -13399, , -13391, -13375, -13359, -13355, -13353, -13343, -13342, -13335, -13332, -13328, -13312, -13310, -13293, -13274, , -13268, -13268
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'exam_comp_set8 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 1000
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 300000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 1000
                        
                },
                suggestedMin: -78852,
                suggestedMax: 0,
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/webjars/timefold/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScoreProblemStatisticChart1_3a445.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_3a445.resize();
});