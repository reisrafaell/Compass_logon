<template>
  <div >
  <homeContainerCenter/>
    <homeContainerFooter/>
    
  </div>
</template>

<script>

import homeContainerCenter from '@/containers/homeContainerCenter';
import homeContainerFooter from '@/containers/homeContainerFooter';

export default {
  name: 'Home',
  components: {
    homeContainerCenter,
    homeContainerFooter
 
  }
}
</script>
