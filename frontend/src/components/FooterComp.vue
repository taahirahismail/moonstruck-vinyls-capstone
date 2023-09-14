<template>
    <div class="d-flex align-items-center justify-content-between footer purple-bg">
        <div>
            <router-link to="/profile" class="nav-link">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXElEQVR4nO2Yu4oUURCGSwQxVhS8rPgQGhkoGgm6mIq5eJmZDUUEA99gxcAbBoYGYqJuYObqK6z3zEukM+f/q1t05EgtrSyLjDPT59innfNBwTAX+nxUTVd1iWQymUxmximKYg+ALoAlki8A0KJ6vQSgUxTFnLQdVd0F4AaAIUk/KgD8IHmvLMu90kZU9QRJ/E30D+FUdV7aBICFKmOTyv7ONoCetCWzqCG7Vjr5TKvq7inLeFR575RUAXAnoOyvTN+ShFvPMILw0CpHUgNAL7TsGunzkhoAHkcUfiipQfJ1LGGbyCQ1GPbuvD4gqcF4sqshqcEZFEZE4YGkBsmXEYVXJDUwa20JQCeWsHPurKRGURRzkUbL70mOlgaA2xGEr0vKKx2SLuTdmeQOSRmSR0OUdrUAOC5tAEAvwIqnK21CVeenLG8r42PSRpxz20gu2p12zKzeTf4/Ow7WVuwhHsAjm5qqMdRixYYK59y5ZFtPJpPJZP4HvPcbVXW/qp4meZXkE9s+kvwEoKziY/WefbZo31XVffZbaQMAtltPBfCA5Jcas/RnAPdV9YwNL5IS3vtNAE7ZxmOciWqa52EbWACctGs1JjoYDLaSvATgQ2jJEfLvSV7s9/tb/nVGF2qWbN2wa1/w3m+OKuucOwjgXYOi6+ONc+5AcFHv/QYAV2LsrAKUuZ3psp0xmCzJa02LjSF+M4g0gG7TMhNId0IIv21aZIJ4FUK4bFGGGUL4edMiE8TTEMKHY0xQEbL7zdpmbWEDwBEAzwB8TVDUzrQM4NDqYTOZTCaTyUiq/AQ7Y5Wguu9CXAAAAABJRU5ErkJggg==">
            </router-link>
        </div>
        <div class="text-center">
            <span>&copy; Moonstruck Vinyl's <br> Yet Another Taahirah Ismail Production <br> {{new Date().getFullYear()}}</span>
        </div>
        <div>
            <router-link to="/admin" class="nav-link">Admin</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .purple-bg {
        background: #2D1128;
    }

    .footer {
        padding: 20px;
    }

    .nav-link {
        font-size: 20px;
        color: #F4F4F4;
    }

    .nav-link:hover {
        color: #ffe342;
    }
    
    .router-link-active {
        color: #FFD700;
    }
</style>